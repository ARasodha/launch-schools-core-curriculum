// My Solution:
// Grocery List Assignment
// 1. Add event listener for DOMContentLoaded
// 2. Create form and init to form element
// 3. Add submit event listener to form
//     1. Stop default form submission
//     2. Create item and init to the value from the item input
//     3. Create quantity and init to the value from the quantity input
//     4. If quantity === “” reassign it to 1
//     5. Create list and init to grocery list ul
//     6. Create li element and set its innerHTML to quantity  + ‘ ‘  + item
//     7. Reset the form 
// 8. Add before Event listener to window
//     1. Hide form — only show ul
//     2. Remove it with afterprint event when print window closed
class GroceryList {
  constructor(listSelector) {
    this.list = document.querySelector(listSelector);
  }

  addItem(item, quantity) {
    let li = document.createElement('li');
    li.textContent = `${quantity} ${item}`;
    this.list.appendChild(li);
  };
}

document.addEventListener("DOMContentLoaded", event => {
  let form = document.querySelector('form');
  let groceryList = new GroceryList("#grocery-list");

  form.addEventListener("submit", event => {
    event.preventDefault();

    let item = document.getElementById("name").value;
    let quantity = document.getElementById("quantity").value || String(1);

    groceryList.addItem(item, quantity);
    form.reset();
  });

  window.addEventListener("beforeprint", event => {
    form.hidden = true;
  })

  window.addEventListener("afterprint", event => {
    form.hidden = false;
  })
});

// Lesson Solution:
(function groceryListManager() {
  class GroceryList {
    constructor(listContainerElement) {
      this.list = document.querySelector(listContainerElement);
    }

    addItem(name, quantity) {
      var listItem = document.createElement("li");
      listItem.append(`${quantity} ${name}`);

      this.list.append(listItem);
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    let form = document.querySelector("form");
    let myGroceryList = new GroceryList("#grocery-list");
    const getValueOf = (selector) => form.querySelector(selector).value;

    form.addEventListener("submit", function (event) {
      event.preventDefault();

      let name = getValueOf("#name");
      let quantity = getValueOf("#quantity") || "1";

      myGroceryList.addItem(name, quantity);
      form.reset();
    });
  });
})();