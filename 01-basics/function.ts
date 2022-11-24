function add(n1: number, n2: number): number {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
  return;
}

function addAndHandle(n1: number, n2: number, cb: (a: number) => void) {
  const result = n1 + n2;
  cb(result);
}

printResult(add(2, 111));

let combinedValues: (a: number, b: number) => number;

combinedValues = add;
// combinedValues = printResult

console.log(combinedValues(100, 20));

addAndHandle(10, 20, (res) => {
  console.log(res);
  return res;
});
