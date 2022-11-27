type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Barathraj",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

// Function Overload to return types for the function to have
// the type of the return type for the possible combination
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  // Type Guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }

  return a + b;
}

const result = add("Barathraj", " D");

// Optional Chaining

const fetchedUserData = {
  id: "u1",
  name: "Barathraj",
  job: {
    title: "Frontend Developer",
    description: "Working in the React JS and Vannila Javascript",
  },
};

console.log(fetchedUserData?.job?.title);

const userInput1 = "";

const storedData = userInput1 ?? "DEFAULT";

console.log(storedData);

type UnknownEmployee = Employee | Admin;

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log("Name: " + emp.name);
  if ("privileges" in emp) {
    console.log("Privileges: " + emp.privileges);
  }

  if ("startDate" in emp) {
    console.log("Start Date: " + emp.startDate);
  }
}

printEmployeeInformation(e1);
printEmployeeInformation({ name: "Aravind", startDate: new Date() });

class Car {
  drive() {
    console.log("Driving...");
  }
}

class Truck {
  drive() {
    console.log("Driving a truck...");
  }

  loadCargo(amount: number) {
    console.log("Loading cargo ..." + amount);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }

  console.log("Moving with speed " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 100 });

// Type Casting
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// const userInput = document.getElementById("user-input") as HTMLInputElement;
const userInput = document.getElementById("user-input");
if (userInput) {
  (userInput as HTMLInputElement).value = "Hi";
}

// Index Types

interface ErrorContainer {
  // { email : 'Not a valid email', username : 'Must start with small letter'}
  // id: string; -- predefined property type must be the same
  // id: number -- invalid property for the type string mentioned here
  [prop: string]: string;
}

const errorBad: ErrorContainer = {
  email: "Not valid email",
  username: "Must start with a captial charater",
};
