// Import Employee class
const Employee = require('./Employee');

// Manager subclass that extends Employee class
class Manager extends Employee {

    // Constructor takes in name, id, and email and passes them to the Employee class, then declares office number property
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    
    // getOfficeNumber() method that returns office number
    getOfficeNumber() {
        return this.officeNumber;
    }
    
    // getRole() method returns 'Manager'
    getRole() {
        return this.role = 'the team manager';
    }
}

module.exports = Manager;
