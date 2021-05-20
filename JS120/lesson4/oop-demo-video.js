
// Constructor Functions
function UserCreator(name) {
  this.name = name;
}

UserCreator.prototype.sayName = function() {
  return `I am ${this.name}!`;
}

let user1 = new UserCreator('Arjun');
// console.log(user1);
// // console.log(user1.sayName());
// console.log(user1.constructor);

function PaidUserCreator(name, balance) {
  UserCreator.call(this, name);
  this.balance = balance;
}

PaidUserCreator.prototype = Object.create(UserCreator.prototype);
PaidUserCreator.prototype.constructor = PaidUserCreator;
PaidUserCreator.prototype.increase = function() {
  this.balance++;
}

let paidUser1 = new PaidUserCreator('Ryan', 2);
console.log(paidUser1);
paidUser1.increase();
console.log(paidUser1);

console.log(PaidUserCreator.prototype.constructor);
console.log(paidUser1.sayName());

// Classes
class UserCreator {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return `I am ${this.name}!`;
  }
}

let user1 = new UserCreator('Arjun');
// console.log(user1);
// console.log(user1.sayName());

class PaidUserCreator extends UserCreator {
  constructor(name, balance) {
    super(name);
    this.balance = balance;
  }

  increase() {
    this.balance += 1;
  }
}

let paidUser1 = new PaidUserCreator('Ryan', 2);
console.log(paidUser1);
paidUser1.increase();
console.log(paidUser1);

// console.log(PaidUserCreator.prototype);