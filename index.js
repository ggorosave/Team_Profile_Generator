// Packages
const inquirer = require('inquirer');
// Modules
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { renderHtml } = require('./src/page-template');


class NewTeam {

    constructor() {
        // Empty array to push new team members into
        this.team = []
    }


    // Questions for user input (inquirer)
    getEmployeeQuestions(role) {
        const employeeQuestions = [
            {
                type: 'input',
                name: 'name',
                message: `What is ${role}'s name?`,
                validate: val => /[a-z]/gi.test(val),
            },
            {
                type: 'input',
                name: 'id',
                message: `What is ${role}'s id?`,
                validate: val => /[1-9]/g.test(val),
            },
            {
                type: 'input',
                name: 'email',
                message: `What is ${role}'s email?`,
                validate: val => /[a-z1-9!@_\-\.]/gi.test(val),
            }
        ]

        return employeeQuestions;
    }

    // Manager questions
    askForManagerInfo(role) {
        const employeeQuestions = this.getEmployeeQuestions(role);

        return inquirer
            .prompt(
                [
                    // Spreads out employee questions
                    ...employeeQuestions,
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: "What is team manager's office number?",
                        validate: val => /[1-9]/g.test(val),
                    }
                ]
            ).then((ans) => {
                // destructures answers
                const { name, id, email, officeNumber } = ans;

                // creates new instance of Manager from answer
                const manager = new Manager(name, id, email, officeNumber);

                // pushes manager into team array
                this.team.push(manager);
                console.log('Added a team manager...');

                // takes user back to menu
                this.addMoreEmployeesMenu();
                
            });
    }

    // Engineer Questions
    askForEngineerInfo(role) {
        const employeeQuestions = this.getEmployeeQuestions(role);

        return inquirer
            .prompt(
                [
                    // Spreads out employee questions
                    ...employeeQuestions,
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is your engineer's github username?",
                        validate: val => /[a-z1-9!@_\-\.]/gi.test(val),
                    }
                ]
            ).then((ans) => {
                // destructures answers
                const { name, id, email, github } = ans;

                // creates new instance of Engineer from answer
                const engineer = new Engineer(name, id, email, github);

                // pushes engineer to team array
                this.team.push(engineer);
                console.log('Added an engineer to the team...');

                // returns user to menu
                this.addMoreEmployeesMenu();
            });
    }

    // Intern Questions
    askForInternInfo(role) {
        const employeeQuestions = this.getEmployeeQuestions(role);

        return inquirer
            .prompt(
                [
                    // Spreads out employee questions
                    ...employeeQuestions,
                    {
                        type: 'input',
                        name: 'school',
                        message: "What is your intern's school?",
                        validate: val => /[a-z]/gi.test(val),
                    }
                ]
            ).then((ans) => {
                // destructures answers
                const { name, id, email, school } = ans;

                // creates new instance of Intern from answer
                const intern = new Intern(name, id, email, school);

                // pushes user to intern array
                this.team.push(intern);
                console.log('Added and intern to the team...');

                // returns user to menu
                this.addMoreEmployeesMenu();
            });
    }

    // Add an employee menu
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
               
                // Switch case for user choice (look at destructuring)
                switch (addEmployee) {
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

                        // sends team array to page template where the HTML is rendered
                        renderHtml(this.team);

                        break;
                    default:

                        throw 'Please select an option';

                }
            });
    }

    // Function to initialize the app
    buildTeam() {
        // Logs instructions on screen
        console.log('============================================INSTRUCTIONS============================================')
        console.log('')
        console.log('Welcome to the Team Profile generator!')
        console.log('Answer the following questions to generate an profile page for your team.')
        console.log('Your team must include a manager and at least one engineer.')
        console.log('')
        console.log('====================================================================================================')
        console.log('')

        // prompts user for managaer info
        this.askForManagerInfo('the team manager');
    }
}

const newTeam = new NewTeam();
newTeam.buildTeam();