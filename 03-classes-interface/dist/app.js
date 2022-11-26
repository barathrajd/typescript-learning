"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    static createEmployee(name) {
        return { name: name };
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
Department.fiscalYear = 2020;
class ITDepartments extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`IT Department - ID : ${this.id}`);
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
    describe() {
        console.log(`Accounting Department - ID : ${this.id}`);
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
const employee1 = Department.createEmployee("Barathraj");
console.log(employee1);
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