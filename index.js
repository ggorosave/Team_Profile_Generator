// Packages
const inquirer = require('inquirer');
const fs = require('fs');
// Modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

class NewTeam {

    constructor() {

    }


    // Questions for user input (inquirer)
    getEmployeeQuestions(role) {
        const employeeQuestions = [
            {
                type: 'input',
                name: 'name',
                message: `What is ${role}'s name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `What is ${role}'s id?`,
            },
            {
                type: 'input',
                name: 'email',
                message: `What is ${role}'s email?`,
            }
        ]

        return employeeQuestions;
    }

    askForManagerInfo(role) {
        const employeeQuestions = this.getEmployeeQuestions(role);

        return inquirer
            .prompt(
                [
                    ...employeeQuestions,
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: "What is team manager's office number?",
                    }
                ]
            ).then((ans) => {
                console.log(ans);
            });
    }

    askForEngineerInfo(role) {
        const employeeQuestions = this.getEmployeeQuestions(role);

        return inquirer
            .prompt(
                [
                    ...employeeQuestions,
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is your engineer's github username?",
                    }
                ]
            ).then((ans) => {
                console.log(ans);
            });
    }

    askForInternInfo(role) {
        const employeeQuestions = this.getEmployeeQuestions(role);

        return inquirer
            .prompt(
                [
                    ...employeeQuestions,
                    {
                        type: 'input',
                        name: 'school',
                        message: "What is your intern's school?",
                    }
                ]
            ).then((ans) => {
                console.log(ans);
            });
    }

    // Select menu
    addMoreEmployeesMenu() {
        return inquirer
            .prompt(
                [
                    {
                        type: 'list',
                        name: 'addEmployee',
                        message: 'Select the team member you would like to add:',
                        choices: ['Engineer', 'Intern', 'Stop adding team members',],
                    }
                ]
            ).then((ans) => {
                const { addEmployee } = ans;
                console.log(addEmployee);
                // Switch case for user choice (look at destructuring)
                switch(addEmployee) {
                    case 'Engineer':
                        
                        // run questions for engineer
                        this.askForEngineerInfo('your engineer');

                        break;
                    case 'Intern':

                        // run questions for intern
                        this.askForInternInfo('your intern');
                        
                        break;
                    case 'Stop adding team members':

                        console.log('Generating html...');

                        break;
                    default:
                        
                        throw 'Please select an option';
                    
                }
            });
    }
    // Function to write html file

    // Function to append html file

    // Function to initialize the app

    // Initialize the app here
}

// TESTS


    const newTeam = new NewTeam();

    // newTeam.askForManagerInfo('the team manager');

    // newTeam.askForEngineerInfo('your engineer');

    // newTeam.askForInternInfo('your intern');

    newTeam.addMoreEmployeesMenu();
