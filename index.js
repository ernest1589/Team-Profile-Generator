const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./src/generate-page.js");
const path = require("path");
const RESULTS_DIR = path.resolve(__dirname, "results");
const resultsPath = path.join(RESULTS_DIR, "teamProfiles.html");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const myTeam = [];

const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is your Name?",
        name: "employee",
      },
      {
        type: "input",
        message: "What is your employee's ID?",
        name: "managersId",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const manager = new Manager(
        answers.name,
        answers.managersId,
        answers.email,
        answers.officeNumber
      );
      myTeam.push(manager);
      promptMenu();
    });
};

const promptMenu = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "menu",
        message:
          "Choose the member you would like to add or finish the process",
        choices: ["add engineer", "add intern", "Finish the process"],
      },
    ])
    .then((userChoice) => {
      switch (userChoice.menu) {
        case "add engineer":
          promptEngineer();
          break;
        case "add intern":
          promptIntern();
          break;
        default:
          buildTeam();
      }
    });
};

const promptEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Engineer's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the Engineer's employee ID?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Engineer's email address?",
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What is the Engineer's Github username?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const engineer = new Engineer(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.githubUsername
      );
      myTeam.push(engineer);
      promptMenu();
    });
};

const promptIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the Intern's name?",
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the Intern's employee Id?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the Intern's email address?",
      },
      {
        type: "input",
        name: "school",
        message: "What is the name of the School the Intern comes from?",
      },
    ])
    .then((answers) => {
      console.log(answers);
      const intern = new Intern(
        answers.name,
        answers.employeeId,
        answers.email,
        answers.school
      );
      myTeam.push(intern);
      promptMenu();
    });
};

const buildTeam = () => {
  if (!fs.existsSync(RESULTS_DIR)) {
    fs.mkdirSync(RESULTS_DIR);
  }
  fs.writeFileSync(resultsPath, generatePage(myTeam), "utf-8");
};

promptUser();
