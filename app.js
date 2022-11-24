// Union Type is pipe symbol |
// e.g: number | string
function combine(input1, input2) {
    var result;
    // Adding Runtime type checking to solve the confusion for the typescript
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(20, 30);
var combinedName = combine("Barathraj", "D");
console.log(combinedAges);
console.log(combinedName);
