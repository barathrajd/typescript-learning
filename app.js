function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log("Result: " + num);
    return;
}
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
printResult(add(2, 111));
var combinedValues;
combinedValues = add;
// combinedValues = printResult
console.log(combinedValues(100, 20));
addAndHandle(10, 20, function (res) {
    console.log(res);
    return res;
});
