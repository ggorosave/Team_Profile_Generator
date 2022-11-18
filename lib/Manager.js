// Import Employee class
const Employee = require('./Employee');

// Manager subclass that extends Employee class
class Manager extends Employee {

    // Constructor that takes name, id, email, and officeNumber
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    // super that takes name, id, and email
    // declare officeNumber property
    
    // getOfficeNumber() method that returns office number
    
    // getRole() method return 'Manager'
}

module.exports = Manager;
