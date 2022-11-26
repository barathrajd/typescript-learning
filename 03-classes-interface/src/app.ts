class Department {
  // private id : string
  // public name: string;
  // private is the modifier
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}) : ${this.name}`);
  }

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
}

class AccountingDepartment extends Department {
  private lastreport: string;

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

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastreport = reports[0];
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

const artDepartment = new Department("d1", "Art");
artDepartment.describe();
console.log(artDepartment);
artDepartment.addEmployee("Barath");
// Property Employees is private
// artDepartment.employees[2] = "Deva";
// artDepartment.printEmployeeInformation();

const it = new ITDepartments("d2", ["Barath"]);
it.describe();
console.log(it);
it.addEmployee("Barath");
// it.printEmployeeInformation();

const account = new AccountingDepartment("d3", []);
account.addReports("report 1");
// Setter
account.mostRecentReport = "report 2";
// Getter
console.log(account.mostRecentReport);

account.describe();
console.log(account);
account.addEmployee("Raj");
account.printReports();
