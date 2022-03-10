const Intern  = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email) {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() { // overridden to return 'Intern'
        return "Intern";
    }
};    

module.exports = Intern;