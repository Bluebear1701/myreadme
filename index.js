// Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const Choice = require("inquirer/lib/objects/choice");
// Create an array of questions for user input
const questions = [
    {
        // project name
        type: "input",
        name: "title",
        message: "Please enter your project name",
    },
    // description
    {
        type: "input",
        name: "description",
        message: "Enter a description of your project",
    },

    // Steps on how to install
    {
        type: "input",
        name: "installation",
        message: "What are the steps required to install your project?",
    },

    // Usage 
    {
        type: "input"
        name: "usage"
        message: "What can you use this project for?"
    }    

    // github username
    {
        type: "input",
        name: "username",
        message: "What is your github user name?",
    },

    // license and badge
    {
        type: "list",
        name: "license",
        message: "What license do you want to use?",
        choices: ["MIT", "Apache-2.0", "ISC "],
    },

    // Contributions
    {
        type: "input",
        name: "contributions",
        message: "How can other developers contribute?",
    },
    // test
    {
        type: "input",
        name: "test",
        message:
            "Does your applications have tests? Please provide an example on how to run them here.",
    },
    // email
    {
        type: "input",
        name: "email",
        message: "Please enter your email.",
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName);
    fs.writeFileSync(fileName, data);
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        var readme = generateMarkdown(answers);
        writeToFile("Readme.md", readme);
    });
}

// Function call to initialize app
init();
