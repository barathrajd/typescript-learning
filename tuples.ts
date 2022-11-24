const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Coding"],
  role: [2, "author"],
};

// person.role.push("Author");
// person.role[1] = 10;
// person.role = [0, "Author", "author"];

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

// console.log(person.name);

for (const hobbie of person.hobbies) {
  console.log(hobbie);
}
