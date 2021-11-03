const { dbQuery } = require("./db-query");

module.exports = class PgPersistence {
  // Are all of the todos in the todo list done? If the todo list has at least
  // one todo and all of its todos are makred done, then the todo list is 
  // done. Otherwise, it is undone
  isDoneTodoList(todoList) {
    return todoList.todos.length > 0 && todoList.todos.every(todo => todo.done);
  }

  // Does the todo list have any undone todos? Return true if yes, false if no.
  hasUndoneTodos(todoList) {
    return todoList.todos.some(todo => !todo.done);
  }

  // Returns a promise that resolves to a sorted list of all the todo lists
  // together with their todos. The list is sorted by completion status and
  // title (case-insensitive). The todos in the lit are unsorted. 
  async sortedTodoLists() {
    const ALL_TODOLISTS = "SELECT * FROM todolists ORDER BY lower(title) ASC";
    const FIND_TODOS = "SELECT * FROM todos WHERE todolist_id = $1";

    let result = await dbQuery(ALL_TODOLISTS);
    let todoLists = result.rows;
    
    for (let index = 0; index < todoLists.length; ++index) {
      let todoList = todoLists[index];
      let todos = await dbQuery(FIND_TODOS, todoList.id);
      todoList.todos = todos.rows;
    }

    return this._partitionTodoLists(todoLists);
  }

  // Returns a new list of todo lists partitioned by completion status
  _partitionTodoLists(todoLists) {
    let undone = [];
    let done = [];
    
    todoLists.forEach(todoList => {
      if (this.isDoneTodoList(todoList)) {
        done.push(todoList);
      } else {
        undone.push(todoList);
      }
    });

    return undone.concat(done);
  }

  // Returns a promise that resolves to the todo list with the specified ID. The
  // todo list contains the todos for that list. The todos are not sorted. The
  // Promise resolves to `undefined` if the todo list is not found.
  async loadTodoList(todoListId) {
    const FIND_TODOLIST = "SELECT * FROM todoLists WHERE id = $1";
    const FIND_TODOS = "SELECT * FROM todos WHERE todolist_id = $1";

    let resultTodoList = dbQuery(FIND_TODOLIST, todoListId);
    let resultTodos = dbQuery(FIND_TODOS, todoListId);
    let resultBoth = await Promise.all([resultTodoList, resultTodos]);

    let todoList = resultBoth[0].rows[0];
    if (!todoList) return undefined;

    todoList.todos = resultBoth[1].rows;
    return todoList;
  }

  // Returns a promise that resolves to a sorted list of all the todos in the
  // specified todo list. The list is sorted by completion status and title
  // (case-insensitive).
  async sortedTodos(todoList) {
    const FIND_SORTED_TODOS = "SELECT * FROM todos" +
                              " WHERE todolist_id = $1 " + 
                              "ORDER BY done, lower(title) ASC";

    let result = await dbQuery(FIND_SORTED_TODOS, todoList.id);
    return result.rows;
  }

  // Find a todo with the indicated ID in the indicated todo list. Returns `undefined` if not
  // found. Note than both `todoListId` and `todoID` must be numeric
  async loadTodo(todoListId, todoId) {
   const FIND_TODO = "SELECT * FROM todos WHERE todolist_id = $1 AND id = $2";

   let result = await dbQuery(FIND_TODO, todoListId, todoId);
   return result.rows[0];
  }
  
  // Toggle a todo between the done and not done state. Returns a promise that
  // resolves to `true` on success, `false` if the todo list or todo doesn't
  // exist. The id arguments must both be numeric.
  async toggleDoneTodo(todoListId, todoId) {
    const TOGGLE_DONE = "UPDATE todos SET done = NOT done" +
                        " WHERE todolist_id = $1 AND id = $2";
    
    let result = await dbQuery(TOGGLE_DONE, todoListId, todoId);
    return result.rowCount > 0; 
  }

  // Delete a todo from the specified todo list. Returns a promise that resolves
  // to `true` on success, `false` on failure.
  async deleteTodo(todoListId, todoId) {
    const DELETE_TODO = "DELETE FROM todos WHERE id = $1 AND todolist_id = $2";
    
    let resultDeleteTodo = await dbQuery(DELETE_TODO, todoId, todoListId);
    return resultDeleteTodo.rowCount > 0;
  }

  // Mark all todos in the specified todo list as done. Returns a promise that
  // resolves to `true` on success, `false` if the todo list doesn't exist. The
  // todo list ID must be numeric.
  async completeAllTodos(todoListId) {
    const COMPLETE_ALL = "UPDATE todos SET done = true WHERE todolist_id = $1";

    let result = await dbQuery(COMPLETE_ALL, todoListId);
    return result.rowCount > 0;
  }

   // Create a new todo with the specified title and add it to the indicated todo
  // list. Returns a promise that resolves to `true` on success, `false` on
  // failure.
  async createTodo(todoListId, title) {
    const NEW_TODO = "INSERT INTO todos (title, todolist_id) VALUES ($1, $2)";

    let result = await dbQuery(NEW_TODO, title, todoListId);
    return result.rowCount > 0;
  }
  
  // Delete a todo list and all of its todos (handled by cascade). Returns a
  // Promise that resolves to `true` on success, false if the todo list doesn't
  // exist.
  async deleteTodoList(todoListId) {
    const DELETE_TODOLIST = "DELETE FROM todolists WHERE id = $1";

    let result = await dbQuery(DELETE_TODOLIST, todoListId);
    return result.rowCount > 0;
  }


  // Set a new title for the specified todo list. Returns a promise that
  // resolves to `true` on success, `false` if the todo list wasn't found.
  async setTodoListTitle(todoListId, title) {
    const UPDATE_TITLE = "UPDATE todolists SET title = $1 WHERE id = $2";

    let result = await dbQuery(UPDATE_TITLE, title, todoListId);
    return result.rowCount > 0;
  }

   // Returns a Promise that resolves to `true` if a todo list with the specified
  // title exists in the list of todo lists, `false` otherwise.
  async existsTodoListTitle(title) {
    const FIND_TODOLIST = "SELECT * FROM todolists WHERE title = $1";
    
    let result = await dbQuery(FIND_TODOLIST, title);
    return result.rowCount > 0;
  }

  // Create a new todo list with the specified title and add it to the list of
  // todo lists. Returns a Promise that resolves to `true` on success, `false`
  // if the todo list already exists.
  async createTodoList(title) {
    const CREATE_TODOLIST = "INSERT INTO todolists (title) VALUES ($1)";

    try {
      let result = await dbQuery(CREATE_TODOLIST, title);
      return result.rowCount;
    } catch (error) {
      if (store.isUniqueConstraintViolation(error)) return false;
        throw error;
    }
  }

  // Returns `true` if `error` eems to indicate a `UNIQUE` constraint
  // violation, `false` otherwise.
  isUniqueConstraintViolation(error) {
    return /duplicate key value violates unique constraint/.test(String(error));
  }
};

