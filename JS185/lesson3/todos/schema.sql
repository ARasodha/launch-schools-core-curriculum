CREATE TABLE todoLists (
  id serial PRIMARY KEY,
  title text NOT NULL UNIQUE
);

CREATE TABLE todos (
  id serial PRIMARY KEY,
  title text NOT NULL,
  done boolean DEFAULT false,
  todoList_id integer 
    NOT NULL 
    REFERENCES todoLists (id) 
    ON DELETE CASCADE
);
