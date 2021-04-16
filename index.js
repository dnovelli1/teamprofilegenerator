const { data } = require('browserslist');
const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const team = [];


const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email' 
    }
]
const managerQuestion = [{
    type: 'input',
    message: 'What is your office number?',
    name: 'officeNumber'
}]


function getManager() {
    inquirer.prompt(questions.concat(managerQuestion))
    .then(data => {
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        team.push(manager);
        getNextEmployee();
    })
}
function getNextEmployee() {

}

function getEngineer() {

}

getManager();