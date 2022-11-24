let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";

// Extra type check for the unknown type
if (typeof userInput === "string") {
  userName = userInput;
}

// Never produce the value
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An Error occurred", 500);

console.log(result);
