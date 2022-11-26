interface Greetings {
  name: string;
  greet(phrase: string): void;
}

let user1: Greetings;

class Person implements Greetings {
  name: string;
  age = 23;
  constructor(name: string) {
    this.name = name;
  }
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  }
}

user1 = {
  name: "Barathraj",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1 = new Person("Barath");

user1.greet("Welcome");
console.log(user1);
