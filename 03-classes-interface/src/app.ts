// type AddFunction = (a:number, b: number) => number
interface AddFunction {
  (a: number, b: number): number;
}

let add: AddFunction;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name?: string;
}

interface Greetings extends Named {
  greet(phrase: string): void;
}

let user1: Greetings;

class Person implements Greetings {
  name?: string;
  age = 23;
  constructor(name?: string) {
    if (name) {
      this.name = name;
    }
  }
  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hi");
    }
  }
}

user1 = {
  name: "Barathraj",
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1 = new Person();

user1.greet("Welcome");
console.log(user1);
