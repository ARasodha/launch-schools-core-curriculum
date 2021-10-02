const express = require("express");
const morgan = require("morgan");
const flash = require("express-flash");
const session = require("express-session");
const { body, validationResult } = require("express-validator");
const TodoList = require("./lib/todolist");
const { sortTodoLists, sortTodos } = require("./lib/sort");
const store = require("connect-loki");

const app = express();
const host = "localhost";
const port = 3000;
const LokiStore = store(session);

const Todo = require("./lib/todo");

app.set("views", "./views");
app.set("view engine", "pug");

app.use(morgan("common"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false}));

// Sessions configuration + connect loki to use cookies
app.use(session({
  cookie: {
    httpOnly: false,
    maxAge: 31 * 24 * 60 * 60 * 1000, // 31 days in milliseconds
    path: "/",
    secure: false,
  },
  name: "launch-school-todos-session-id",
  resave: false,
  saveUninitialized: true,
  secret: "this is not very secure",
  store: new LokiStore({}),
}));
app.use(flash());

// Set up persistent session data
app.use((req, res, next) => {
  if (!("todoLists" in req.session)) {
    req.session.todoLists = [];
  }

  next();
});
// Extract Session Info
app.use((req, res, next) => {
  res.locals.flash = req.session.flash;
  delete req.session.flash;
  next();
});

//Set up persistent session data
app.use((req, res, next) => {
  let todoLists = [];
  if ("todoLists" in req.session) {
    req.session.todoLists.forEach(todoList => {
      todoLists.push(TodoList.makeTodoList(todoList));
    });
  }

  req.session.todoLists = todoLists;
  next();
});


// Find a todo list with the indicated ID. Returns `undefined` if not found
// Note that `todoListId` must be numeric
const loadTodoList = (todoListId, todoLists) => {
  return todoLists.find(todoList => todoList.id === todoListId);
}

// Find a todo with the indicated ID in the indicated todo list. Returns `undefined` if not found.
// Note that BOTH `todoId` and `todoListId` must be numeric
const loadTodoItem = (todoId, todoListId, todoLists) => {
  let todoList = loadTodoList(todoListId, todoLists);
  if (!todoList) return undefined;

  return todoList.todos.find(todo => todo.id === todoId);
}

app.get("/", (req, res) => {
  res.redirect("/lists");
});

// Render the list of todo lists
app.get("/lists", (req, res) => {
  res.render("lists", {
    todoLists: sortTodoLists(req.session.todoLists),
  });
})

// Render new todo list page
app.get("/lists/new", (req, res) => {
  res.render("new-list");
});

// Create a new todo list and add it to the specified list
app.post("/lists", 
  [
    body("todoListTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
      .custom((title, { req }) => {
        let todoLists = req.session.todoLists;
        let duplicate = todoLists.find(list => list.title === title);
        console.log(duplicate)
        return duplicate === undefined;
      })
      .withMessage("List title must be unique."),
  ],
  (req, res) => {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(message => req.flash("error", message.msg));
      res.render("new-list", {
        flash: req.flash(),
        todoListTitle: req.body.todoListTitle,
      });
    } else {
      req.session.todoLists.push(new TodoList(req.body.todoListTitle));
      req.flash("success", "The todo list has been created.");
      res.redirect("/lists");
    }
  });

// Render individual todo list and its todos
app.get("/lists/:todoListId", (req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(+todoListId, req.session.todoLists);
  if (todoList === undefined) {
    next(new Error("Not found."));
  } else {
    res.render("list", {
      todoList: todoList,
      todos: sortTodos(todoList),
    });
  }
});

// Renders todo list page and allows the check boxes to be clicked done/undone
app.post("/lists/:todoListId/todos/:todoId/toggle", (req, res, next) => {
  let { todoListId, todoId } = req.params;
  let todo = loadTodoItem(+todoId, +todoListId, req.session.todoLists);

  if (!todo) {
    next(new Error("Not found."));
  } else {
    let title = todo.title;
    if (todo.isDone()) {
      todo.markUndone();
      req.flash("success", `${title} marked as NOT done!`);
    } else {
      todo.markDone();
      req.flash("success", `${title} marked as done!`)
    }

    res.redirect(`/lists/${todoListId}`);
  }
});

// Renders todo list page and allows items to be deleted (trash can button)
app.post("/lists/:todoListId/todos/:todoId/destroy", (req, res, next) => {
  let { todoListId, todoId } = req.params;
  
  let todoList = loadTodoList(+todoListId, req.session.todoLists);
  if (!todoList) {
    next(new Error("Not found"));
  } else {
    let todo = loadTodoItem(+todoId, +todoListId, req.session.todoLists);
    let title = todo.title;
    if (!todo) {
      next(new Error("Not found"));
    } else {
      todoList.removeAt(todoList.findIndexOf(todo));
      req.flash("success", `${title} has been deleted!`)
    }
  }

  res.redirect(`/lists/${todoListId}`)
});

// Render todo list page and check all todo items as complete
app.post("/lists/:todoListId/complete_all", (req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(+todoListId, req.session.todoLists);
  
  if (!todoList) {
    next(new Error("Not found"));
  } else {
    todoList.markAllDone();
    req.flash("success", "All todo items have been marked done!");
  }

  res.redirect("/lists");
});

// Render todo list page and create new todo
app.post("/lists/:todoListId/todos", 
  [
    body("todoTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The title is required.")
      .isLength({ max: 100 })
      .withMessage("Todo title must be between 1 and 100 characters.")
  ],
  (req, res, next) => {
    let todoListId = req.params.todoListId;
    let todoList = loadTodoList(+todoListId, req.session.todoLists);

    if (!todoList) {
      next(new Error("Not found."));
    } else {
      let errors = validationResult(req);
      if (!errors.isEmpty()) {
        errors.array().forEach(message => req.flash("error", message.msg));
        
        res.render("list", {
          flash: req.flash(),
          todoList: todoList,
          todos: sortTodos(todoList),
          todoTitle: req.body.todoTitle,
        });
      } else {
        todoList.add(new Todo(req.body.todoTitle));
        req.flash("success", `${req.body.todoTitle} added!`);
        res.redirect(`/lists/${todoListId}`);
      }
    }
  });

  // Render edit todo list page
  app.get("/lists/:todoListId/edit", (req, res, next) => {
    let todoList = loadTodoList(+req.params.todoListId, req.session.todoLists)
    if (!todoList) {
      next(new Error("Not found."));
    } else {
      res.render("edit-list", { todoList });
    }
  });

// Render list paging after deleting todo list
app.post("/lists/:todoListId/destroy", (req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(+todoListId, req.session.todoLists);

  if (!todoList) {
    next(new Error("Not found."));
  } else {
    let index = todoLists.indexOf(todoList);
    todoLists.splice(index, 1);
    req.flash("success", `${todoList.title} list deleted`);
    res.redirect("/lists");
  }
});

// Render the todo list page when changing the title and saving the submission
app.post("/lists/:todoListId/edit", 
  [
    body("todoListTitle")
      .trim()
      .isLength({ min: 1 })
      .withMessage("The list title is required.")
      .isLength({ max: 100 })
      .withMessage("List title must be between 1 and 100 characters.")
      .custom((title, { req }) => {
        let todoLists = req.session.todoLists;
        let duplicate = todoLists.find(list => list.title === title);
        return duplicate === undefined;
      })
      .withMessage("List title must be unique."),
  ],
(req, res, next) => {
  let todoListId = req.params.todoListId;
  let todoList = loadTodoList(+todoListId, req.session.todoLists);
  if (!todoList) {
    next(new Error("Not found."));
  } else {
    let errors = validationResult(req);
    if (!errors.isEmpty()) {
      errors.array().forEach(message => req.flash("error", message.msg));
      res.render("new-list", {
        flash: req.flash(),
        todoListTitle: req.body.todoListTitle,
        todoList: todoList,
      });
    } else {
      todoList.setTitle(req.body.todoListTitle);
      req.flash("success", `Title changed to ${req.body.todoListTitle}`);
      res.redirect(`/lists/${todoListId}`);
    }
  }
});


// Error handler
app.use((err, req, res, _next) => {
  console.log(err); // writes more extensive information to the console log
  res.status(404).send(err.message);
});

// Listener
app.listen(port, host, () => {
  console.log(`Todos is listening on port ${port} of ${host}!`);
});


