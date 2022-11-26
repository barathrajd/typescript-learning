abstract class Department {
  static fiscalYear = 2020;
  // private id : string
  // public name: string;
  // private is the modifier
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    // Added the extra safety for the code only once in the exection
    // this.id = 10
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartments extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe() {
    console.log(`IT Department - ID : ${this.id}`);
  }
}

class AccountingDepartment extends Department {
  private lastreport: string;
  private static instance: AccountingDepartment;

  get mostRecentReport() {
    if (this.lastreport) {
      return this.lastreport;
    }
    throw new Error("No reports found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass a valid value");
    }
    this.addReports(value);
  }

  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastreport = reports[0];
  }

  static getInstance() {
    if (AccountingDepartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDepartment("d3", []);
    return this.instance;
  }

  describe() {
    console.log(`Accounting Department - ID : ${this.id}`);
  }

  addEmployee(name: string) {
    if (name === "Barath") {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastreport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

// const artDepartment = new Department("d1", "Art");
// artDepartment.describe();
// console.log(artDepartment);
// artDepartment.addEmployee("Barath");
// Property Employees is private
// artDepartment.employees[2] = "Deva";
// artDepartment.printEmployeeInformation();

const employee1 = Department.createEmployee("Barathraj");
console.log(employee1);

const it = new ITDepartments("d2", ["Barath"]);
it.describe();
console.log(it);
it.addEmployee("Barath");
// it.printEmployeeInformation();

// const account = new AccountingDepartment("d3", []);
const account = AccountingDepartment.getInstance();
account.addReports("report 1");
// Setter
account.mostRecentReport = "report 2";
// Getter
console.log(account.mostRecentReport);

account.describe();
console.log(account);
account.addEmployee("Raj");
account.printReports();
