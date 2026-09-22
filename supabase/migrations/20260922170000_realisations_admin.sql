create table public.realisations (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  client text not null default '',
  category text not null default '',
  year text not null default '',
  location text not null default '',
  summary text not null default '',
  description text not null default '',
  images jsonb not null default '[]'::jsonb,
  video_url text not null default '',
  external_url text not null default '',
  featured boolean not null default false,
  sort_order integer not null default 0,
  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint realisations_images_array check (jsonb_typeof(images) = 'array')
);

create index realisations_public_order_idx
  on public.realisations (sort_order asc, published_at desc)
  where status = 'published';

create or replace function public.set_realisation_timestamps()
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

create trigger set_realisation_timestamps
before update on public.realisations
for each row execute function public.set_realisation_timestamps();

alter table public.realisations enable row level security;

create policy "Published realisations are public"
on public.realisations for select to anon
using (status = 'published');

create policy "Admins can read all realisations"
on public.realisations for select to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

create policy "Admins can create realisations"
on public.realisations for insert to authenticated
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

create policy "Admins can update realisations"
on public.realisations for update to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())))
with check (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

create policy "Admins can delete realisations"
on public.realisations for delete to authenticated
using (exists (select 1 from public.admin_users where user_id = (select auth.uid())));

grant select on public.realisations to anon, authenticated;
grant insert, update, delete on public.realisations to authenticated;

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values ('realisation-images', 'realisation-images', true, 15728640, array['image/jpeg', 'image/png', 'image/webp', 'image/avif'])
on conflict (id) do update set public = excluded.public, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

create policy "Admins can upload realisation images"
on storage.objects for insert to authenticated
with check (
  bucket_id = 'realisation-images'
  and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
);

create policy "Admins can update realisation images"
on storage.objects for update to authenticated
using (
  bucket_id = 'realisation-images'
  and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
)
with check (
  bucket_id = 'realisation-images'
  and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
);

create policy "Admins can delete realisation images"
on storage.objects for delete to authenticated
using (
  bucket_id = 'realisation-images'
  and exists (select 1 from public.admin_users where user_id = (select auth.uid()))
);
