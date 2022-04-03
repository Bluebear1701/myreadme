// Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")
// Create an array of questions for user input
const questions = [{

    // project name
    type: "input",
    name: "title",
    message: "Please enter your project name"
},
    // description 
{
    type: "input",
    name: "description",
    message: "Enter a description of your project"
},
    // optional table of contents
    
    // Usage steps on how to install
{
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?"
},

    // github username and repo-link for project
   
    // screenshots
    // credits
    // license
    // badges
    // features
    // Contributions
];


// Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName)
    fs.writeFileSync(fileName, data)
}

// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) =>{
    console.log(answers)
    var readme = generateMarkdown(answers)
    console.log(readme)
    writeToFile("Readme.md", readme)
    })
}

// Function call to initialize app
init();
