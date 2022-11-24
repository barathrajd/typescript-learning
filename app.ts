// Union Type is pipe symbol |
// e.g: number | string

// Alias
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  // Literal Type restriction to the these two types
  resultConversion: "as-number" | "as-text"
): Combinable {
  let result;
  // Adding Runtime type checking to solve the confusion for the typescript
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(20, 30, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("20", "30", "as-number");
console.log(combinedStringAges);

const combinedName = combine("Barathraj", "D", "as-text");
console.log(combinedName);
