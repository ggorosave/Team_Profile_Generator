// Emplyoee class
class Employee {
    
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = this.getRole();
    }
    
    // getName() method that returns name from input
    getName() {
        return this.name;
    }
    
    // getId() method that retrieves id from input
    getId() {
        return this.id;
    }
    
    // getEmail() method that retrieves email from input
    getEmail() {
        return this.email;
    }
    
    // getRole() method that returns 'Employee'
    getRole() {
        return this.role = 'Employee';
    }
};

module.exports = Employee;