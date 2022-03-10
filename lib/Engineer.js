const Engineer = require('./Employee');

class Engineer extends Employee {
    constructor(name = '', id = '', email = '') {
        super(name, id, email);

        this.gitHub = gitHub;
    }

    getGitHub() {

    }

    getRole() {  // overridden to return 'Engineer'
   
    }    
};

module.exports = Engineer;