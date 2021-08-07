CREATE TABLE public.users (
	id bigserial NOT NULL,
	"name" text NOT NULL,
	lastname text NOT NULL,
	created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT users_pkey PRIMARY KEY (id)
);

CREATE TABLE public.coordinates (
	id bigserial NOT NULL,
	user_id int8 NULL,
	lon float8 NOT NULL,
	lat float8 NOT NULL,
	created_at timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	CONSTRAINT coordinates_pkey PRIMARY KEY (id),
	CONSTRAINT coordinates_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id)
);

insert into users (name, lastname)
values ('John1', 'Doe1'),
('John2', 'Doe2'),
('John3', 'Doe3'),
('John4', 'Doe4'),
('John5', 'Doe5'),
('John6', 'Doe6');


insert into coordinates (user_id, lon, lat)
values (1, 76.946562, 43.237843),
(2, 76.922380, 43.960901),
(5, 76.222380, 43.260901);