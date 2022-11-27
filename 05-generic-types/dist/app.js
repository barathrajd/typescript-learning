"use strict";
function merge(objectA, objectB) {
    return Object.assign(objectA, objectB);
}
const mergedObject = merge({ name: "Barathraj" }, { age: 30 });
const mergedObject2 = merge({ name: "Barathraj" }, { hobbies: ["Cooking"] });
console.log(mergedObject);
function countAndDescribe(element) {
    let descriptionText = "Got no Value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hi There"));
function extractAndConvert(obj, key) {
    return "Value: " + obj[key];
}
console.log(extractAndConvert({ name: "Barathraj" }, "name"));
//# sourceMappingURL=app.js.map