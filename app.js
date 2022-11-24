var userInput;
var userName;
userInput = 5;
userInput = "Max";
// Extra type check for the unknown type
if (typeof userInput === "string") {
    userName = userInput;
}
// Never produce the value
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An Error occurred", 500);
console.log(result);
