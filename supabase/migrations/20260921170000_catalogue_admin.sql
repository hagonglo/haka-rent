create table public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz not null default now()
);

create schema if not exists private;
revoke all on schema private from public, anon, authenticated;

create table private.admin_email_allowlist (
  email text primary key check (email = lower(email)),
  created_at timestamptz not null default now()
);

insert into private.admin_email_allowlist (email)
values ('hakaarent@gmail.com')
on conflict (email) do nothing;

create table public.catalogue_items (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  reference text not null unique,
  number text not null,
  name text not null,
  brand text not null default '',
  model text not null default '',
  category text not null,
  subcategory text not null default '',
  description text not null default '',
  long_description text not null default '',
  specs jsonb not null default '[]'::jsonb,
  details jsonb not null default '[]'::jsonb,
  included jsonb not null default '[]'::jsonb,
  compatibilities jsonb not null default '[]'::jsonb,
  availability text not null default 'Disponible',
  featured boolean not null default false,
  images jsonb not null default '[]'::jsonb,
  alt text not null default '',
  whatsapp text not null default '',
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint catalogue_items_specs_array check (jsonb_typeof(specs) = 'array'),
  constraint catalogue_items_details_array check (jsonb_typeof(details) = 'array'),
  constraint catalogue_items_included_array check (jsonb_typeof(included) = 'array'),
  constraint catalogue_items_compatibilities_array check (jsonb_typeof(compatibilities) = 'array'),
  constraint catalogue_items_images_array check (jsonb_typeof(images) = 'array')
);

create index catalogue_items_status_category_idx
  on public.catalogue_items (status, category);

create index catalogue_items_published_featured_idx
  on public.catalogue_items (published_at desc, featured)
  where status = 'published';

create or replace function public.is_catalogue_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1
    from public.admin_users
    where user_id = (select auth.uid())
  );
$$;

revoke all on function public.is_catalogue_admin() from public;
grant execute on function public.is_catalogue_admin() to authenticated;

create or replace function public.set_catalogue_item_timestamps()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();

  if new.status = 'published' and (old.status is distinct from 'published' or new.published_at is null) then
    new.published_at = now();
  elsif new.status = 'draft' then
    new.published_at = null;
  end if;

  return new;
end;
$$;

create trigger set_catalogue_item_timestamps
before update on public.catalogue_items
for each row execute function public.set_catalogue_item_timestamps();

alter table public.admin_users enable row level security;
alter table public.catalogue_items enable row level security;

create policy "Published catalogue items are public"
on public.catalogue_items
for select
to anon, authenticated
using (status = 'published');

create policy "Catalogue admins can read all items"
on public.catalogue_items
for select
to authenticated
using ((select public.is_catalogue_admin()));

create policy "Catalogue admins can create items"
on public.catalogue_items
for insert
to authenticated
with check ((select public.is_catalogue_admin()));

create policy "Catalogue admins can update items"
on public.catalogue_items
for update
to authenticated
using ((select public.is_catalogue_admin()))
with check ((select public.is_catalogue_admin()));

create policy "Catalogue admins can delete items"
on public.catalogue_items
for delete
to authenticated
using ((select public.is_catalogue_admin()));

create or replace function private.sync_catalogue_admin()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if exists (
    select 1
    from private.admin_email_allowlist
    where email = lower(new.email)
  ) then
    insert into public.admin_users (user_id)
    values (new.id)
    on conflict (user_id) do nothing;
  else
    delete from public.admin_users where user_id = new.id;
  end if;

  return new;
end;
$$;

revoke all on function private.sync_catalogue_admin() from public, anon, authenticated;

create trigger sync_catalogue_admin_after_auth_change
after insert or update of email on auth.users
for each row execute function private.sync_catalogue_admin();

grant usage on schema public to anon, authenticated;
grant select on public.catalogue_items to anon, authenticated;
grant insert, update, delete on public.catalogue_items to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'catalogue-images',
  'catalogue-images',
  true,
  10485760,
  array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

create policy "Catalogue images are public"
on storage.objects
for select
to anon, authenticated
using (bucket_id = 'catalogue-images');

create policy "Catalogue admins can upload images"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'catalogue-images'
  and (select public.is_catalogue_admin())
);

create policy "Catalogue admins can update images"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'catalogue-images'
  and (select public.is_catalogue_admin())
)
with check (
  bucket_id = 'catalogue-images'
  and (select public.is_catalogue_admin())
);

create policy "Catalogue admins can delete images"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'catalogue-images'
  and (select public.is_catalogue_admin())
);
