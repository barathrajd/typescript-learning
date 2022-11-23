const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Coding"],
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobbie of person.hobbies) {
  console.log(hobbie);
}
