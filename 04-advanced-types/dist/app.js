"use strict";
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
//# sourceMappingURL=app.js.map