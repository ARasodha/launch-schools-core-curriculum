// Compare object titles alphabetically (case insensitive)
const compareByTitle = (itemA, itemB) => {
  let titleA = itemA.title.toLowerCase();
  let titleB = itemB.title.toLowerCase();

  if (titleA < titleB) {
    return -1;
  } else if (titleA > titleB) {
    return 1;
  } else {
    return 0;
  }
};

  function sortTodoLists(undone, done) {
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
    return [].concat(undone, done);
  };

  function sortTodos(undone, done) {
    undone.sort(compareByTitle);
    done.sort(compareByTitle);
    return [].concat(undone, done);
  };

module.exports = {
  // return the list of todo lists sorted by completion status and title
  // (case-insensitive). The uncompleted and completed todo lists must be passed
  // to the method via the `undone` and `done` arguments
  sortTodoLists,

  // return the list of todos in the todo list sorted by completion status and
  // title.
  sortTodos,
};