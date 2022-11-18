// Import Employee class
const Employee = require('./Employee');

// Intern subclass that extends Employee class
class Intern extends Employee {

    
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    
    // getSchool() method that returns school
    getSchool() {
        return this.school;
    }

    // getRole() method return 'Intern'
    getRole() {
        return this.role = 'Intern';
    }
}

module.exports = Intern;