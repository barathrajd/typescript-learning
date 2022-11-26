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
    get mostRecentReport() {
        if (this.lastreport) {
            return this.lastreport;
        }
        throw new Error("No reports found");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("Please pass a valid value");
        }
        this.addReports(value);
    }
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastreport = reports[0];
    }
    addEmployee(name) {
        if (name === "Barath") {
            return;
        }
        this.employees.push(name);
    }
    addReports(text) {
        this.reports.push(text);
        this.lastreport = text;
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
account.addReports("report 1");
account.mostRecentReport = "report 2";
console.log(account.mostRecentReport);
account.describe();
console.log(account);
account.addEmployee("Raj");
account.printReports();
//# sourceMappingURL=app.js.map