// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?",
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
    },   
    {
        type: 'input',
        name: 'screenshots',
        message: 'Please provide a screenshot of your project:',
    },
    {
        type: 'input',
        name:'installation',
        message: 'What command should be run to install dependencies?',
        
    },
    {
        type: 'input',
        name: 'howtouse',
        message: 'What does the user need to know about using this application?',

    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT','None'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors of this project?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What command should be run to run tests?',    
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Do you have any questions?',
    },
    {
        type: 'input',
        name: 'link',
        message: 'Please provide a link to your project:',
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}




// TODO: Create a function to initialize app


function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log(
            'README.md has been created!'); 
          fs.writeFileSync('README.md', generateMarkdown(responses));
    });
}

// Function call to initialize app
init();
