function Logger(constructor: Function) {
  console.log("Loading...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Barath";

  constructor() {
    console.log("Creating person object");
  }
}

const barath = new Person();

console.log(barath);
