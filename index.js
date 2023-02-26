
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/temp");


const employee = [];

//Manager Questions 
const managerQuestions = [
    {
        type: 'input',
        message: 'Enter Team Mangers Name?',
        name: 'name',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Please Enter  Name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Team Mangers employee ID?',
        name: 'id',
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Please Enter ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Team Mangers Email?',
        name: 'email',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Please Enter  Email Address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Team Mangers office number?',
        name: 'officeNumber',
        validate: (officeNumberInput) => {
            if (officeNumberInput) {
                return true;
            } else {
                console.log("Please Enter  Valid  Number!");
                return false;
            }
        }
    },
];


//Engineer Questions
const engineerQuestions = [
    {
        type: 'input',
        message: 'Enter Engineers Name?',
        name: 'name',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Enter Engineers Name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Engineers ID?',
        name: 'id',
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Enter Valid ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Engineers Email?',
        name: 'email',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Enter Valid Email Address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Engineers GitHub UserName?',
        name: 'github',
        validate: (githubInput) => {
            if (githubInput) {
                return true;
            } else {
                console.log("Enter GutHub UserName!");
                return false;
            }
        }
    },
];
//Intern Questions 
const internQuestions = [
    {
        type: 'input',
        message: 'Enter Intern Name?',
        name: 'name',
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log("Enter the Interns Name!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Interns ID?',
        name: 'id',
        validate: (idInput) => {
            if (idInput) {
                return true;
            } else {
                console.log("Enter Valid ID!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Interns Email?',
        name: 'email',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } else {
                console.log("Enter Email Address!");
                return false;
            }
        }
    },
    {
        type: 'input',
        message: 'Enter Interns School?',
        name: 'school',
        validate: (schoolInput) => {
            if (schoolInput) {
                return true;
            } else {
                console.log("Enter a School!");
                return false;
            }
        }
    },
];



function Manager_Data() {
    inquirer.prompt(managerQuestions)
        .then((managerAnswers) => {            
            const manager = new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNumber);
            employee.push(manager);
            Team_Members();
        })
        .catch((error) => {
            console.error(error);
        });
}


function Team_Members() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'teamMemberType',
            message: 'Select typr of team member you like to add?',
            choices: ['Engineer', 'Intern', 'I do not want to add any team members']
        }
    ])
        .then((answer) => {
            switch (answer.teamMemberType) {
                case "Engineer":
                    inquirer.prompt(engineerQuestions)
                        .then((engineerAnswers) => {
                            const engineer = new Engineer(engineerAnswers.name, engineerAnswers.id, engineerAnswers.email, engineerAnswers.github);                       
                            employee.push(engineer);
                            Team_Members();
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                    break;
                case "Intern":
                    inquirer.prompt(internQuestions)
                        .then((internAnswers) => {
                            const intern = new Intern(internAnswers.name, internAnswers.id, internAnswers.email, internAnswers.school);
                            employee.push(intern);
                            Team_Members();
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                    break;
                case "I do not want to add any team members":
                    fs.writeFile('./dist/index.html', template.generateHTML(employee), err => {
                        if (err) throw err;
                        console.log("Team successfully generated! Check  the HTML file!");
                    })
            }
        })
};
function init() {
    console.log("Welcome to the Team Generator!");
    console.log("Please add members to your team!");
    Manager_Data();
};
init();