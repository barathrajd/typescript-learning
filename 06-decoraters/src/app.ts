function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGING - PERSON")
class Person {
  name = "Barath";

  constructor() {
    console.log("Creating person object");
  }
}

const barath = new Person();

console.log(barath);
