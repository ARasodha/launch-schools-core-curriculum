// Practice Problems: Object Creation with Prototypes
// Exercise 1:
let petPrototype = {
  sleep: function() {
    return 'I am sleeping';
  },
  wake: function() {
    return 'I am awake';
  }

}
function createPet(animal, name) {
  let proto = Object.create(petPrototype);
  proto.animal = animal;
  proto.name = name;
  return proto;
}

let pudding = createPet("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
console.log(pudding.sleep()); // I am sleeping
console.log(pudding.wake());  // I am awake

let neptune = createPet("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

// Exercise 2:
let PetPrototype = {
  sleep: function() {
    return 'I am sleeping';
  },
  wake: function() {
    return 'I am awake';
  },
  init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  }
}

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
console.log(pudding.sleep()); // I am sleeping
console.log(pudding.wake());  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
console.log(neptune.sleep()); // I am sleeping
console.log(neptune.wake());  // I am awake

// Exercise 3:
// Explanation: The OLOO pattern allows us to write less lines of code since all of the methods
// are in a common prototype object. Usually factory functions will place a copy of each 
// object in each instance (Not the way i did it in question one). In addition, factory functions
// offer the options for private state whereas OLOO does not 