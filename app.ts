// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "John",
//   age: 30,
//   hobbies: ["Sports", "Coding"],
//   role: [2, "author"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "John",
  age: 30,
  hobbies: ["Sports", "Coding"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

// console.log(person.name);

for (const hobbie of person.hobbies) {
  console.log(hobbie);
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
