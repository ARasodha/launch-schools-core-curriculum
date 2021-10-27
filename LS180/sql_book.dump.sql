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
-- Name: addresses; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.addresses (
    user_id integer NOT NULL,
    street character varying(30) NOT NULL,
    city character varying(30) NOT NULL,
    state character varying(30) NOT NULL
);


ALTER TABLE public.addresses OWNER TO arjunrasodha;

--
-- Name: books; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.books (
    id integer NOT NULL,
    title character varying(100) NOT NULL,
    author character varying(100) NOT NULL,
    published_date timestamp without time zone NOT NULL,
    isbn character(12)
);


ALTER TABLE public.books OWNER TO arjunrasodha;

--
-- Name: books_id_seq; Type: SEQUENCE; Schema: public; Owner: arjunrasodha
--

CREATE SEQUENCE public.books_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.books_id_seq OWNER TO arjunrasodha;

--
-- Name: books_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arjunrasodha
--

ALTER SEQUENCE public.books_id_seq OWNED BY public.books.id;


--
-- Name: checkouts; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.checkouts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    book_id integer NOT NULL,
    checkout_date timestamp without time zone,
    return_date timestamp without time zone
);


ALTER TABLE public.checkouts OWNER TO arjunrasodha;

--
-- Name: checkouts_id_seq; Type: SEQUENCE; Schema: public; Owner: arjunrasodha
--

CREATE SEQUENCE public.checkouts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.checkouts_id_seq OWNER TO arjunrasodha;

--
-- Name: checkouts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arjunrasodha
--

ALTER SEQUENCE public.checkouts_id_seq OWNED BY public.checkouts.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    book_id integer NOT NULL,
    reviewer_name character varying(255),
    content character varying(255),
    rating integer,
    published_date timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.reviews OWNER TO arjunrasodha;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: arjunrasodha
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reviews_id_seq OWNER TO arjunrasodha;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: arjunrasodha
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: arjunrasodha
--

CREATE TABLE public.users (
    id integer NOT NULL,
    full_name character varying(25) NOT NULL,
    enabled boolean DEFAULT true,
    last_login timestamp without time zone DEFAULT now(),
    CONSTRAINT users_full_name_check CHECK (((full_name)::text <> ''::text))
);


ALTER TABLE public.users OWNER TO arjunrasodha;

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

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: books id; Type: DEFAULT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.books ALTER COLUMN id SET DEFAULT nextval('public.books_id_seq'::regclass);


--
-- Name: checkouts id; Type: DEFAULT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.checkouts ALTER COLUMN id SET DEFAULT nextval('public.checkouts_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: addresses; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.addresses VALUES (1, '1 Market Street', 'San Francisco', 'CA');
INSERT INTO public.addresses VALUES (2, '2 Elm Street', 'San Francisco', 'CA');
INSERT INTO public.addresses VALUES (3, '3 Main Street', 'Boston', 'MA');


--
-- Data for Name: books; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.books VALUES (1, 'My First SQL Book', 'Mary Parker', '2012-02-22 12:08:17.320053', '981483029127');
INSERT INTO public.books VALUES (2, 'My Second S1L Book', 'John Mayer', '1972-07-03 09:22:45.050088', '857300923713');
INSERT INTO public.books VALUES (3, 'My First SQL Book', 'Cary Flint', '2015-10-18 14:05:44.547516', '523120967812');


--
-- Data for Name: checkouts; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.checkouts VALUES (1, 1, 1, '2017-10-15 14:13:18.095143', NULL);
INSERT INTO public.checkouts VALUES (2, 1, 2, '2017-10-05 16:22:44.593188', '2017-10-13 13:00:12.673382');
INSERT INTO public.checkouts VALUES (3, 2, 2, '2017-10-15 11:11:24.994973', '2017-10-22 17:47:10.407569');
INSERT INTO public.checkouts VALUES (4, 5, 3, '2017-10-15 09:27:07.215217', NULL);


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.reviews VALUES (1, 1, 'John Smith', 'My first review', 4, '2017-12-10 05:50:11.127281');
INSERT INTO public.reviews VALUES (2, 2, 'John Smith', 'My second review', 5, '2017-10-13 15:05:12.673382');
INSERT INTO public.reviews VALUES (3, 2, 'Alice Walker', 'Another review', 1, '2017-10-22 23:47:10.407569');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: arjunrasodha
--

INSERT INTO public.users VALUES (1, 'John Smith', false, '2021-10-06 15:28:28.736834');
INSERT INTO public.users VALUES (3, 'Harry Potter', true, '2021-10-06 15:30:47.12363');
INSERT INTO public.users VALUES (5, 'Jane Smith', true, '2021-10-07 10:52:34.785273');
INSERT INTO public.users VALUES (2, 'Alice Walker', true, '2021-10-06 15:30:47.12363');


--
-- Name: books_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arjunrasodha
--

SELECT pg_catalog.setval('public.books_id_seq', 1, false);


--
-- Name: checkouts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arjunrasodha
--

SELECT pg_catalog.setval('public.checkouts_id_seq', 1, false);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arjunrasodha
--

SELECT pg_catalog.setval('public.reviews_id_seq', 1, false);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: arjunrasodha
--

SELECT pg_catalog.setval('public.users_id_seq', 3, true);


--
-- Name: addresses addresses_pkey; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_pkey PRIMARY KEY (user_id);


--
-- Name: books books_isbn_key; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_isbn_key UNIQUE (isbn);


--
-- Name: books books_pkey; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.books
    ADD CONSTRAINT books_pkey PRIMARY KEY (id);


--
-- Name: checkouts checkouts_pkey; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.checkouts
    ADD CONSTRAINT checkouts_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: users users_id_key; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_id_key UNIQUE (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: addresses addresses_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.addresses
    ADD CONSTRAINT addresses_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: checkouts checkouts_book_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.checkouts
    ADD CONSTRAINT checkouts_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(id) ON DELETE CASCADE;


--
-- Name: checkouts checkouts_user_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.checkouts
    ADD CONSTRAINT checkouts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: reviews reviews_book_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: arjunrasodha
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_book_id_fkey FOREIGN KEY (book_id) REFERENCES public.books(id) ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

