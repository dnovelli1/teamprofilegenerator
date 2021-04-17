const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];



const managerQuestions = [
    {
        type: 'input',
        message: 'What is the team managers name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is the team managers id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is the team managers email?',
        name: 'email' 
    },
    {
        type: 'input',
        message: 'What is the team managers office number?',
        name: 'officeNumber'
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: 'What is your engineers name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your engineers id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your engineers email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your engineers GitHub username?',
        name: 'github'
    },
]

const internQuestions = [
    {
        type: 'input',
        message: 'What is your interns name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your interns id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your interns email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your interns school?',
        name: 'school'
    },
]

const employeeQuestion = [
    {
        type: 'list',
        message: 'Which type of team member would you like to add?',
        name: 'choice',
        choices: ['Intern', 'Engineer', 'Done adding members']
    }
]



function getManager() {
    inquirer.prompt(managerQuestions)
    .then(mAnswers => {
        const manager = new Manager(mAnswers.name, mAnswers.id, mAnswers.email, mAnswers.officeNumber);
        team.push(manager);
        getNextEmployee();
    })
}

function getNextEmployee() {
    inquirer.prompt(employeeQuestion)
    .then(function (data) {
        switch (data.choice) {
            case 'Intern':
                inquirer.prompt(internQuestions)
                .then(answers => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                    team.push(intern)
                    getNextEmployee();
                });
            break;
            case 'Engineer':
                inquirer.prompt(engineerQuestions)
                .then(answers => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                    team.push(engineer);
                    getNextEmployee();
                });
            break;
            case 'Done adding members':
                
                
        }
    })
}


function getEngineer() {
    inquirer.prompt(engineerQuestions)
    .then(eAnswers => {
        const engineer = new Engineer(eAnswers.name, eAnswers.id, eAnswers.email, eAnswers.school);
        team.push(engineer);
        // getNextEmployee();
    })
}

function getIntern() {
    inquirer.prompt(internQuestions)
    .then(iAnswers => {
        const intern = new Intern(iAnswers.name, iAnswers.id, iAnswers.email, iAnswers.github);
        team.push(intern);
        // getNextEmployee();
    })
}

getManager();