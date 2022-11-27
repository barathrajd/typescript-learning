// // Genetic type Array
// const names: Array<string> = ["Barathraj", "Devarajan"];

// // names[0].split(' ')

// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("This is done");
//     resolve(10);
//   }, 2000);
//   reject(10);
// });

// promise.then((data) => {
//   data.toString();
// });

function merge<T extends object, U extends object>(objectA: T, objectB: U) {
  return Object.assign(objectA, objectB);
}

const mergedObject = merge({ name: "Barathraj" }, { age: 30 });
const mergedObject2 = merge({ name: "Barathraj" }, { hobbies: ["Cooking"] });

console.log(mergedObject);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no Value";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi There"));
