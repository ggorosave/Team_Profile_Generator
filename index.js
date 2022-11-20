// Packages
const inquirer = require('inquirer');
const fs = require('fs');
// Modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { renderHtml } = require('./src/page-template');


class NewTeam {

    constructor() {
        this.team = []
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
                const { name, id, email, officeNumber } = ans;
                const manager = new Manager(name, id, email, officeNumber);
                this.team.push(manager);
                console.log('Added a team manager...');
                this.addMoreEmployeesMenu();
                // renderInitialHtml()
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
                const { name, id, email, github } = ans;
                const engineer = new Engineer(name, id, email, github);
                this.team.push(engineer);
                console.log('Added an engineer to the team...');
                this.addMoreEmployeesMenu();
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
                const { name, id, email, school } = ans;
                const intern = new Intern(name, id, email, school);
                this.team.push(intern);
                console.log('Added and intern to the team...');
                this.addMoreEmployeesMenu();
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
                        renderHtml(this.team);

                        break;
                    default:
                        
                        throw 'Please select an option';
                    
                }
            });
    }

    // Function to initialize the app
    buildTeam() {
        this.askForManagerInfo('the team manager');
    }
}

    const newTeam = new NewTeam();
    newTeam.buildTeam();