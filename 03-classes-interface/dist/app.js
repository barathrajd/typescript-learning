"use strict";
let add;
add = (n1, n2) => {
    return n1 + n2;
};
let user1;
class Person {
    constructor(name) {
        this.age = 23;
        if (name) {
            this.name = name;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("Hi");
        }
    }
}
user1 = {
    name: "Barathraj",
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1 = new Person();
user1.greet("Welcome");
console.log(user1);
//# sourceMappingURL=app.js.map