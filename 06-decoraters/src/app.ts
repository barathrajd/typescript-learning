// factory Decoraters
function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();

    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h2")!.textContent = p.name;
    }
  };
}

// @Logger("LOGGING - PERSON")
@WithTemplate("<h2>My Person Object</h2>", "app")
class Person {
  name = "Barath";

  constructor() {
    console.log("Creating person object");
  }
}

const barath = new Person();

console.log(barath);
