--
-- PostgreSQL database dump
--

-- Dumped from database version 13.4
-- Dumped by pg_dump version 13.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: albums; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.albums (
    id integer NOT NULL,
    album_name character varying(100) NOT NULL,
    released date,
    genre character varying(100) NOT NULL,
    label character varying(100) NOT NULL,
    singer_id integer
);


ALTER TABLE public.albums OWNER TO arjunrasodha;

--
-- Name: albums_id_seq; Type: SEQUENCE; Schema: public; Owner: arjunrasodha
--

CREATE SEQUENCE public.albums_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.albums_id_seq OWNER TO arjunrasodha;

--
-- Name: albums_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arjunrasodha
--

ALTER SEQUENCE public.albums_id_seq OWNED BY public.albums.id;


--
-- Name: animals; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.animals (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    binomial_name character varying(100) NOT NULL,
    max_weight_kg numeric(5,4),
    max_age_years integer,
    conservation_status character(2),
    class character varying(100),
    phylum character varying(100),
    kingdom character varying(100)
);


ALTER TABLE public.animals OWNER TO arjunrasodha;

--
-- Name: animals_id_seq; Type: SEQUENCE; Schema: public; Owner: arjunrasodha
--

CREATE SEQUENCE public.animals_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.animals_id_seq OWNER TO arjunrasodha;

--
-- Name: animals_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arjunrasodha
--

ALTER SEQUENCE public.animals_id_seq OWNED BY public.animals.id;


--
-- Name: continents; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.continents (
    id integer NOT NULL,
    continent_name character varying(50)
);


ALTER TABLE public.continents OWNER TO arjunrasodha;

--
-- Name: countries; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.countries (
    id integer NOT NULL,
    name character varying(50) NOT NULL,
    capital character varying(50) NOT NULL,
    population integer,
    continent_id integer
);


ALTER TABLE public.countries OWNER TO arjunrasodha;

--
-- Name: countries_id_seq; Type: SEQUENCE; Schema: public; Owner: arjunrasodha
--

CREATE SEQUENCE public.countries_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_id_seq OWNER TO arjunrasodha;

--
-- Name: countries_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arjunrasodha
--

ALTER SEQUENCE public.countries_id_seq OWNED BY public.countries.id;


--
-- Name: singers; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.singers (
    id integer NOT NULL,
    first_name character varying(80) NOT NULL,
    occupation character varying(150),
    date_of_birth date NOT NULL,
    deceased boolean DEFAULT false,
    last_name character varying(100)
);


ALTER TABLE public.singers OWNER TO arjunrasodha;

--
-- Name: famous_people_id_seq; Type: SEQUENCE; Schema: public; Owner: arjunrasodha
--

CREATE SEQUENCE public.famous_people_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.famous_people_id_seq OWNER TO arjunrasodha;

--
-- Name: famous_people_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arjunrasodha
--

ALTER SEQUENCE public.famous_people_id_seq OWNED BY public.singers.id;


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: arjunrasodha
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_id_seq OWNER TO arjunrasodha;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arjunrasodha
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.continents.id;


--
-- Name: albums id; Type: DEFAULT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.albums ALTER COLUMN id SET DEFAULT nextval('public.albums_id_seq'::regclass);


--
-- Name: animals id; Type: DEFAULT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.animals ALTER COLUMN id SET DEFAULT nextval('public.animals_id_seq'::regclass);


--
-- Name: continents id; Type: DEFAULT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.continents ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: countries id; Type: DEFAULT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.countries ALTER COLUMN id SET DEFAULT nextval('public.countries_id_seq'::regclass);


--
-- Name: singers id; Type: DEFAULT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.singers ALTER COLUMN id SET DEFAULT nextval('public.famous_people_id_seq'::regclass);


--
-- Data for Name: albums; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.albums VALUES (1, 'Born to Run', '1975-08-25', 'Rock and Roll', 'Columbia', 1);
INSERT INTO public.albums VALUES (2, 'Purple Rain', '1984-06-25', 'Pop, R&B, Rock', 'Warner Bros', 6);
INSERT INTO public.albums VALUES (3, 'Born in the USA', '1984-06-04', 'Rock and roll, Pop', 'Columbia', 1);
INSERT INTO public.albums VALUES (4, 'Madonna', '1983-07-27', 'Dance-pop, post-disco', 'Warner Bros', 5);
INSERT INTO public.albums VALUES (5, 'True Blue', '1986-06-30', 'Dance-pop, Pop', 'Warner Bros', 5);
INSERT INTO public.albums VALUES (6, 'Elvis', '1956-10-19', 'Rock and roll, Rhythm and Blues', 'RCA Victor', 7);
INSERT INTO public.albums VALUES (7, 'Sign o'' the Times', '1987-03-30', 'Pop, R&B, Rock, Funk', 'Paisley Park, Warner Bros', 6);
INSERT INTO public.albums VALUES (8, 'G.I. Blues', '1960-10-01', 'Rock and roll, Pop', 'RCA Victor', 7);


--
-- Data for Name: animals; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.animals VALUES (7, 'Dove', 'Columbidae Columbiformes', 2.0000, 15, 'LC', 'Aves', 'Chrodata', 'Animalia');
INSERT INTO public.animals VALUES (8, 'Golden Eagle', 'Aquila Chrysaetos', 6.3500, 24, 'LC', 'Aves', 'Chrodata', 'Animalia');
INSERT INTO public.animals VALUES (9, 'Peregrine Falcon', 'Falco Peregrinus', 1.5000, 15, 'LC', 'Aves', 'Chrodata', 'Animalia');
INSERT INTO public.animals VALUES (10, 'Pigeon', 'Columbidae Columbiformes', 2.0000, 15, 'LC', 'Aves', 'Chrodata', 'Animalia');
INSERT INTO public.animals VALUES (11, 'Kakapo', 'Strigops habroptila', 4.0000, 60, 'CR', 'Aves', 'Chrodata', 'Animalia');


--
-- Data for Name: continents; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.continents VALUES (1, 'Europe');
INSERT INTO public.continents VALUES (2, 'North America');
INSERT INTO public.continents VALUES (3, 'Asia');
INSERT INTO public.continents VALUES (4, 'Africa');
INSERT INTO public.continents VALUES (5, 'South America');


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.countries VALUES (6, 'France', 'Paris', 6715800, 1);
INSERT INTO public.countries VALUES (7, 'USA', 'Washington, DC', 325365189, 2);
INSERT INTO public.countries VALUES (8, 'Germany', 'Berlin', 82349400, 1);
INSERT INTO public.countries VALUES (9, 'Japan', 'Tokyo', 126672000, 3);
INSERT INTO public.countries VALUES (10, 'Egypt', 'Cairo', 96308900, 4);
INSERT INTO public.countries VALUES (11, 'Brazil', 'Brasilia', 20838500, 5);


--
-- Data for Name: singers; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.singers VALUES (1, 'Bruce', 'Singer and Song writer', '1949-09-23', false, 'Springsteen');
INSERT INTO public.singers VALUES (3, 'Frank', 'Singer and Actor', '1915-12-12', true, 'Sinatra');
INSERT INTO public.singers VALUES (5, 'Madonna', 'Singer and Actress', '1958-08-16', false, NULL);
INSERT INTO public.singers VALUES (6, 'Prince', 'Singer, Song writer, Musician and Actor', '1958-06-07', true, NULL);
INSERT INTO public.singers VALUES (7, 'Elvis', 'Singer, Musician and Actor', '1935-08-01', true, 'Presley');


--
-- Name: albums_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arjunrasodha
--

SELECT pg_catalog.setval('public.albums_id_seq', 8, true);


--
-- Name: animals_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arjunrasodha
--

SELECT pg_catalog.setval('public.animals_id_seq', 11, true);


--
-- Name: countries_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arjunrasodha
--

SELECT pg_catalog.setval('public.countries_id_seq', 11, true);


--
-- Name: famous_people_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arjunrasodha
--

SELECT pg_catalog.setval('public.famous_people_id_seq', 7, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arjunrasodha
--

SELECT pg_catalog.setval('public.users_id_seq', 5, true);


--
-- Name: countries countries_name_key; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_name_key UNIQUE (name);


--
-- Name: singers singers_pkey; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.singers
    ADD CONSTRAINT singers_pkey PRIMARY KEY (id);


--
-- Name: continents users_pkey; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.continents
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: albums albums_singer_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.albums
    ADD CONSTRAINT albums_singer_id_fkey FOREIGN KEY (singer_id) REFERENCES public.singers(id);


--
-- Name: countries countries_continent_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT countries_continent_id_fkey FOREIGN KEY (continent_id) REFERENCES public.continents(id);


--
-- PostgreSQL database dump complete
--

