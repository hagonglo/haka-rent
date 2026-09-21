alter table private.admin_email_allowlist enable row level security;

grant select on public.admin_users to authenticated;

create policy "Users can verify their own admin membership"
on public.admin_users
for select
to authenticated
using (user_id = (select auth.uid()));

drop policy "Catalogue admins can read all items" on public.catalogue_items;
drop policy "Catalogue admins can create items" on public.catalogue_items;
drop policy "Catalogue admins can update items" on public.catalogue_items;
drop policy "Catalogue admins can delete items" on public.catalogue_items;
drop policy "Published catalogue items are public" on public.catalogue_items;

create policy "Published catalogue items are public"
on public.catalogue_items
for select
to anon
using (status = 'published');

create policy "Catalogue admins can read all items"
on public.catalogue_items
for select
to authenticated
using (
  exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  )
);

create policy "Catalogue admins can create items"
on public.catalogue_items
for insert
to authenticated
with check (
  exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  )
);

create policy "Catalogue admins can update items"
on public.catalogue_items
for update
to authenticated
using (
  exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  )
)
with check (
  exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  )
);

create policy "Catalogue admins can delete items"
on public.catalogue_items
for delete
to authenticated
using (
  exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  )
);

drop policy "Catalogue admins can upload images" on storage.objects;
drop policy "Catalogue admins can update images" on storage.objects;
drop policy "Catalogue admins can delete images" on storage.objects;

create policy "Catalogue admins can upload images"
on storage.objects
for insert
to authenticated
with check (
  bucket_id = 'catalogue-images'
  and exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  )
);

create policy "Catalogue admins can update images"
on storage.objects
for update
to authenticated
using (
  bucket_id = 'catalogue-images'
  and exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  )
)
with check (
  bucket_id = 'catalogue-images'
  and exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  )
);

create policy "Catalogue admins can delete images"
on storage.objects
for delete
to authenticated
using (
  bucket_id = 'catalogue-images'
  and exists (
    select 1 from public.admin_users
    where user_id = (select auth.uid())
  )
);

revoke execute on function public.is_catalogue_admin() from public, anon, authenticated;
drop function public.is_catalogue_admin();

