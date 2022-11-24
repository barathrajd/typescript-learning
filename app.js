// Union Type is pipe symbol |
// e.g: number | string
function combine(input1, input2, 
// Literal Type restriction to the these two types
resultConversion) {
    var result;
    // Adding Runtime type checking to solve the confusion for the typescript
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(20, 30, "as-number");
console.log(combinedAges);
var combinedStringAges = combine("20", "30", "as-number");
console.log(combinedStringAges);
var combinedName = combine("Barathraj", "D", "as-text");
console.log(combinedName);
