var person = {
    name: "John",
    age: 30,
    hobbies: ["Sports", "Coding"],
    role: [2, "author"]
};
// person.role.push("Author");
// person.role[1] = 10;
// person.role = [0, "Author", "author"];
var favoriteActivities;
favoriteActivities = ["Sports"];
// console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobbie = _a[_i];
    console.log(hobbie);
}
