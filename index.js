const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { choices } = require('yargs');

// Array to contain all engineers
const engineerArr = [];

// Array to contain all interns
const internArr = [];

// Inquirer object for common menu option question
const menuOptions = {
    type: 'list',
    name: "menuOptions",
    message: "Please select an option:",
    choices: ["Add an Engineer to the team", "Add an Intern to the team", new inquirer.Separator(), "Finish building the team!"],
};

// Inquirer object for initial manager questions
const managerQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: "What is the manager's name?",
    },
    {
        type: 'number',
        name: 'managerID',
        message: "What is the manager's ID?",
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "What is the manager's email?",
    },
    {
        type: 'number',
        name: 'managerOffice',
        message: "What is the manager's office number?",
    },
    menuOptions
];

// Function that will be called when the engineer menu option is selected. Pushes the created Engineer object into the engineerArr
function engineerPrompt() {
    const engineerQuestions = [
        {
            type: 'input',
            name: 'engineerName',
            message: "Enter the Engineer's name:",
        },
        {
            type: 'number',
            name: 'engineerID',
            message: "Enter the Engineer's ID number:",
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "Enter the Engineer's email:",
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "Enter the Engineer's GitHub:",
        },
        menuOptions
    ]

    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.engineerName, answers.engineerEmail, answers.engineerID, answers.engineerGithub);
        engineerArr.push(engineer);
        if (answers.menuOptions === "Add an Engineer to the team") {
            console.log("|====================================|");
            console.log("|          Add   Engineer            |");
            console.log("|====================================|");
            engineerPrompt();
        }
        else if (answers.menuOptions === "Add an Intern to the team") {
            console.log("|====================================|");
            console.log("|           Add    Intern            |");
            console.log("|====================================|");
            internPrompt();
        }
        else if (answers.menuOptions === "Finish building the team!") {
            console.log("finish team")
            console.log(engineerArr);
            console.log(internArr);
        }
    })
}

// Function that will be called when the intern menu option is selected. Pushes the created intern object into the internArr
function internPrompt() {
    const internQuestions = [
        {
            type: 'input',
            name: 'internName',
            message: "Enter the intern's name:",
        },
        {
            type: 'number',
            name: 'internID',
            message: "Enter the intern's ID number:",
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "Enter the intern's email:",
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "Enter the intern's school:",
        },
        menuOptions
    ]

    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.internName, answers.internEmail, answers.internID, answers.internSchool);
        internArr.push(intern);
        console.log("added intern to intern array");
        if (answers.menuOptions === "Add an Engineer to the team") {
            console.log("|====================================|");
            console.log("|          Add   Engineer            |");
            console.log("|====================================|");
            engineerPrompt();
        }
        else if (answers.menuOptions === "Add an Intern to the team") {
            console.log("|====================================|");
            console.log("|           Add    Intern            |");
            console.log("|====================================|");
            internPrompt();
        }
        else if (answers.menuOptions === "Finish building the team!") {
            console.log("finish team")
            console.log(engineerArr);
            console.log(internArr);
        }
    })
}

function init() {
    inquirer.prompt(managerQuestions).then((answers) => {
        if (answers.menuOptions === "Add an Engineer to the team") {
            console.log("|====================================|");
            console.log("|          Add   Engineer            |");
            console.log("|====================================|");
            engineerPrompt();
        }
        else if (answers.menuOptions === "Add an Intern to the team") {
            console.log("|====================================|");
            console.log("|           Add    Intern            |");
            console.log("|====================================|");
            internPrompt();
        }
        else if (answers.menuOptions === "Finish building the team!") {
            console.log("finish team")
        }
    });
}

init();
