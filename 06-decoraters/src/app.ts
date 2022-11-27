// factory Decoraters
function Logger(logString: string) {
  console.log("FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  console.log("TEPMLATE FACTORY");
  return function (constructor: any) {
    console.log("Rendering template...");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h2")!.textContent = p.name;
    }
  };
}

// @Logger("LOGGING - PERSON")
@Logger("LOGGING")
@WithTemplate("<h2>My Person Object</h2>", "app")
class Person {
  name = "Barath";

  constructor() {
    console.log("Creating person object");
  }
}

const barath = new Person();

console.log(barath);
