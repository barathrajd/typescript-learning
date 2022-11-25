"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`Department (${this.id}) : ${this.name}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartments extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
}
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
    }
    addEmployee(name) {
        if (name === "Barath") {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
}
const artDepartment = new Department("d1", "Art");
artDepartment.describe();
console.log(artDepartment);
artDepartment.addEmployee("Barath");
const it = new ITDepartments("d2", ["Barath"]);
it.describe();
console.log(it);
it.addEmployee("Barath");
const account = new AccountingDepartment("d3", []);
account.describe();
console.log(account);
account.addReports("report 1");
account.addEmployee("Raj");
account.printReports();
//# sourceMappingURL=app.js.map