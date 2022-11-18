// Import Employee class
const Employee = require('./Employee');

// Engineer subclass that extends Employee class
class Engineer extends Employee {

    // Constructor that takes name, id, email, and github
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    
    // getGithub() method that returns github
    getGithub() {
        return this.github;
    }
    
    // getRole() method return 'Engineer'
}

module.exports = Engineer;