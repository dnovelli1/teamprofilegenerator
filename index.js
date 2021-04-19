const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const fs = require('fs');
const createHTML = require('./src/createHTML');
const path = require('path');

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
    console.log('-----------Manager Identification------------');
    inquirer.prompt(managerQuestions)
    .then(mAnswers => {
        const manager = new Manager(mAnswers.name, mAnswers.id, mAnswers.email, mAnswers.officeNumber, 'Manager');
        team.push(manager);
        getNextEmployee();
    })
}

function getNextEmployee() {
    inquirer.prompt(employeeQuestion)
    .then(function (data) {
        switch (data.choice) {
            case 'Intern':
                console.log('----------Intern Information----------');
                inquirer.prompt(internQuestions)
                .then(answers => {
                    const intern = new Intern(answers.name, answers.id, answers.email, answers.school, 'Intern');
                    team.push(intern);
                    console.log(intern);
                    getNextEmployee();
                });
            break;
            case 'Engineer':
                console.log('-----------Engineer Information----------');
                inquirer.prompt(engineerQuestions)
                .then(answers => {
                    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github, 'Engineer');
                    team.push(engineer);
                    console.log(engineer);
                    getNextEmployee();
                });
            break;
            case 'Done adding members':
                generatePage(team);
        }
    })
}

function writeToFile(fileName, data) {
    fs.writeFile(path.join(__dirname, fileName), data, function(err){
        if(err)throw err
        console.log('File Written!');
    })
}




function generatePage(team) {
    console.log('Creating HTML...');
    const html = createHTML(team);
    return writeToFile('team.html', html);
}
getManager();
