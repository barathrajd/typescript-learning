"use strict";
let user1;
user1 = {
    name: "Barathraj",
    age: 23,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Welcome");
//# sourceMappingURL=app.js.map