const number1 = 1;
const number2 = 10;

function add(
  number1: number,
  number2: number,
  printValue: boolean,
  phrase: string
): number {
  let result = number1 + number2;
  if (printValue) {
    console.log(phrase + result);
  }
  return number1 + number2;
}

add(number1, number2, true, "Result is ");
