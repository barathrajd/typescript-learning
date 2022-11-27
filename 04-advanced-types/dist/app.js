"use strict";
var _a;
const e1 = {
    name: "Barathraj",
    privileges: ["create-server"],
    startDate: new Date(),
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
const result = add("Barathraj", " D");
const fetchedUserData = {
    id: "u1",
    name: "Barathraj",
    job: {
        title: "Frontend Developer",
        description: "Working in the React JS and Vannila Javascript",
    },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const userInput1 = "";
const storedData = userInput1 !== null && userInput1 !== void 0 ? userInput1 : "DEFAULT";
console.log(storedData);
function printEmployeeInformation(emp) {
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
    loadCargo(amount) {
        console.log("Loading cargo ..." + amount);
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
}
useVehicle(v1);
useVehicle(v2);
function moveAnimal(animal) {
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
const userInput = document.getElementById("user-input");
if (userInput) {
    userInput.value = "Hi";
}
const errorBad = {
    email: "Not valid email",
    username: "Must start with a captial charater",
};
//# sourceMappingURL=app.js.map