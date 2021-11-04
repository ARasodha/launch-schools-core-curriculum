CREATE TABLE users (
  uername text PRIMARY KEY,
  title text NOT NULL UNIQUE
);

CREATE TABLE todoLists (
  id serial PRIMARY KEY,
  title text NOT NULL UNIQUE,
  username text
    NOT NULL
    REFERENCES users (username)
    ON DELETE CASCADE
);

CREATE TABLE todos (
  id serial PRIMARY KEY,
  title text NOT NULL,
  done boolean DEFAULT false,
  todoList_id integer
    NOT NULL
    REFERENCES todoLists (id)
    ON DELETE CASCADE,
  username text 
    NOT NULL
    REFERENCES users (username)
    ON DELETE CASCADE
);

CREATE TABLE users (
  uername text PRIMARY KEY,
  title text NOT NULL UNIQUE
);