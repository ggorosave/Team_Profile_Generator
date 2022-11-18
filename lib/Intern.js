// Import Employee class
const Employee = require('./Employee');

// Intern subclass that extends Employee class
class Intern extends Employee {

    // Constructor that takes name, id, email, and school
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // super that takes name, id, and email
    // declare school property
    
    // getSchool() method that returns school
    
    // getRole() method return 'Intern'
}

module.exports = Intern;