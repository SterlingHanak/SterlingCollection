
CREATE TABLE games (
	id integer IDENTITY NOT NULL,
	name varchar(100) NOT NULL,
	console varchar(100) NOT NULL,
	publisher varchar(100) NOT NULL,
	release_year integer NOT NULL,
	img_name varchar(100) NOT NULL
	CONSTRAINT pk_games_id PRIMARY KEY(id), 
);

CREATE TABLE albums (
	id integer IDENTITY NOT NULL,
	album_name varchar(100) NOT NULL,
	artist varchar(100) NOT NULL,
	genre varchar(100) NOT NULL,
	release_year integer NOT NULL,
	album_format varchar(100) NOT NULL,
	format_detail varchar(100) NULL,
	img_name varchar(100) NOT NULL
	CONSTRAINT pk_albums_id PRIMARY KEY(id),
);

CREATE TABLE movies (
	id integer IDENTITY NOT NULL,
	title varchar(100) NOT NULL,
	starring varchar(max) NOT NULL,
	movie_format varchar(100) NOT NULL,
	release_year integer NOT NULL,
	format_detail varchar(100) NULL,
	img_name varchar(100) NOT NULL
	CONSTRAINT pk_movies_id PRIMARY KEY(id),
);