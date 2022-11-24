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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Coding"],
    role: Role.ADMIN
};
var favoriteActivities;
favoriteActivities = ["Sports", 1, false];
// console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbie = _a[_i];
    console.log(hobbie);
}
if (person.role === Role.ADMIN) {
    console.log("is admin");
}
