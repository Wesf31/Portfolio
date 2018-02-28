delete from profiles
where profilename = ($1);

select * from profiles;