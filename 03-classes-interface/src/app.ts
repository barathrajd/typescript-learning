class Department {
  // private id : string
  // public name: string;
  // private is the modifier
  private employees: string[] = [];

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
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addReports(text: string) {
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
// Property Employees is private
// artDepartment.employees[2] = "Deva";
// artDepartment.printEmployeeInformation();

const it = new ITDepartments("d2", ["Barathraj"]);
it.describe();
console.log(it);
it.addEmployee("Barath");
// it.printEmployeeInformation();

const account = new AccountingDepartment("d3", []);
account.describe();
console.log(account);
account.addReports("report 1");
account.printReports();
