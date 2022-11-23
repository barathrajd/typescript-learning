var number1 = 1;
var number2 = 10;
function add(number1, number2, printValue, phrase) {
  var result = number1 + number2;
  if (printValue) {
    console.log(phrase + result);
  }
  return number1 + number2;
}
add(number1, number2, true, "Result is ");
