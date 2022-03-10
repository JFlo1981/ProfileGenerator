const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.officeNumber = this.officeNumber;
    }

    getRole() { // overridden to return 'Manager'
        return "Manager";
    }
};

module.exports = Manager;