const Intern  = require('./Employee');

class Intern extends Employee {
    constructor(name = '', id = '', email = '') {
        super(name, id, email);

        this.school = school;
    }

    getSchool() {

    }

    getRole() { // overridden to return 'Intern'

    }
};    

moduke.exports = Intern;