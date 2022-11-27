"use strict";
function merge(objectA, objectB) {
    return Object.assign(objectA, objectB);
}
const mergedObject = merge({ name: "Barathraj" }, { age: 30 });
const mergedObject2 = merge({ name: "Barathraj" }, { hobbies: ["Cooking"] });
console.log(mergedObject);
//# sourceMappingURL=app.js.map