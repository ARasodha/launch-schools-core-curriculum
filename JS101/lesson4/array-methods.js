// FOREACH:
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceEntries = Object.entries(produce);
console.log(produceEntries);

produceEntries.forEach(entry => {
  let [key, value] = entry;
  console.log(`${key} is a ${value}.`);
});

// Array Destructuring:
let name = ['Neymar', 'Da', 'Silva'];
let [firstName, middleName, lastName] = name;
console.log(`My name is ${firstName} ${middleName} ${lastName}.`);

// Random Practice on Objects and Array Methods
let array = [1, 1, 3, 5];
let even = element => element % 2 === 0;
console.log(array.some(even));


let animals = {
  a: 'ant',
  b: 'bear',
  c: 'cat'
};
console.log(Object.values(animals).some(animalName => animalName.length > 2));
console.log(Object.keys(animals).some(key => key === 'a'));
console.log(Object.entries(animals).some(entry => entry.includes('bear')));

let array = [1, 2, 4];
console.log(array.every(val => val > 5));
console.log(Object.keys(animals).every(key => key.length === 1));
console.log(array.find(num => num > 1));
console.log(animals.hasOwnProperty('b'));
