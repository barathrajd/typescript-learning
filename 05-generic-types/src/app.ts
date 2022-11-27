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

function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Barathraj" }, "name"));

// Generic Classes

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  deleteItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Barathaj");
textStorage.addItem("D");
// console.log(textStorage.getItems());
textStorage.deleteItem("D");
// console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);

// const objectStorage = new DataStorage<object>();
// const barathObject = { name: "barathraj" };
// objectStorage.addItem(barathObject);
// objectStorage.addItem({ name: "d" });
// objectStorage.deleteItem(barathObject);
// console.log(objectStorage.getItems());
