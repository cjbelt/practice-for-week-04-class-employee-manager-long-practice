const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, salary, title, manager) {
        super(name, salary, title, manager);
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    _totalSubSalary() {
        let sum = 0;

        for (let i = 0; i < this.employees.length; i++) {
            let employee = this.employees[i];

            if (employee instanceof Manager) {
                sum += employee.salary + employee._totalSubSalary();
            } else {
                sum += employee.salary;
            }
        }

        return sum;
    }

    calculateBonus(multiplier) {
        return (this.salary + this._totalSubSalary()) * multiplier;
    }
}

module.exports = Manager;
