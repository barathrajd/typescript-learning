"use strict";
let user1;
class Person {
    constructor(name) {
        this.age = 23;
        this.name = name;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
user1 = {
    name: "Barathraj",
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1 = new Person("Barath");
user1.greet("Welcome");
console.log(user1);
//# sourceMappingURL=app.js.map