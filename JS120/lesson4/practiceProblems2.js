// Practice Problems: Subtyping with Classes
// Exercise 1:
class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}
// Explanation: If we define a method called play in the Bingo class, it would no longer allow
// the Bingo class to access the play method from the Game class that it has access too. This is
// called method overriding.

// Exercise 2:
class Greeting {
  greet(string) {
    return string;
  }
}

class Hello extends Greeting {
  hi() {
    return this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    return this.greet('Goodbye');
  }
}

let hello = new Hello();
console.log(hello.hi());
let goodbye = new Goodbye();
console.log(goodbye.bye());