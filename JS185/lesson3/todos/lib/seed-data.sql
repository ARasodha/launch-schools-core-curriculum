INSERT INTO todoLists (title) VALUES ('Work Todos'),
                                     ('Home Todos'),
                                     ('Additional Todos'),
                                     ('social todos');

INSERT INTO todos (title, done, todoList_id) VALUES 
                  ('Get coffee', true, 1),
                  ('Chat with co-workers', true, 1),
                  ('Duck out of meeting', false, 1),
                  ('Feed the cats', true, 2),
                  ('Go to bed', true, 2),
                  ('Buy milk', true, 2),
                  ('Study for Launch School', true, 2),
                  ('Go to Libby''s birthday party', true, 4);