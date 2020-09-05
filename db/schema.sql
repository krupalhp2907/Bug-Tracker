create table issues
(
    issue_id int
    auto_increment not null primary key,
    title varchar
    (255) constraint vtitle check
    (length
    (title) > 2),
    status tinyint default 0 constraint vstatus check
    (status >= 0 and status < 2),
    created_at timestamp default current_timestamp,
    modified_at timestamp default current_timestamp on
    update current_timestamp,
    detail varchar(7000),
    relative_id int
    not null
);