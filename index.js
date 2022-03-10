/*
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated 
*/

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
let HTML = "";
const generateManager = require("./templates/manager");
const generateEngineer = require("./templates/engineer");
const generateIntern = require("./templates/intern");
const generateHTML = require("./templates/index");

const managerSetup = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "manager",
        message: "Who is the Team Manager?  (required)",
        validate: (managerInput) => {
          if (managerInput) {
            return true;
          } else {
            console.log("Please enter the name of the Team Manager!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the Employee ID number?  (required)",
        validate: (employeeIdInput) => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log("Please enter the Employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address?  (required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "office",
        message: "What is the office number?  (required)",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter the office number!");
            return false;
          }
        },
      },
    ])
    .then(({ manager, employeeId, email, office }) => {
      const newManager = new Manager(manager, employeeId, email, office);
      HTML += generateManager(newManager);
      console.log(HTML);
      createTeam();
    });
};

const createTeam = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "teamRole",
        message: "Please select the employee's role on the team.",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        name: "name",
        message: "What is the name of the Employee?  (required)",
        validate: (employeeInput) => {
          if (employeeInput) {
            return true;
          } else {
            console.log("Please enter the name of the Employee!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "employeeId",
        message: "What is the Employee ID number?  (required)",
        validate: (employeeIdInput) => {
          if (employeeIdInput) {
            return true;
          } else {
            console.log("Please enter the Employee ID!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is the email address?  (required)",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter the email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "gitHub",
        message: "What is the GitHub name?  (required)",
        when: (input) => input.teamRole === "Engineer",
        validate: (gitHub) => {
          if (gitHub) {
            return true;
          } else {
            console.log("Please enter the GitHub name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is the school name?  (required)",
        when: (input) => input.teamRole === "Intern",
        validate: (school) => {
          if (school) {
            return true;
          } else {
            console.log("Please enter the school name!");
            return false;
          }
        },
      },
    ])
    .then(({ teamRole, name, employeeId, email, gitHub, school }) => {
      if (teamRole === "Engineer") {
        const newEngineer = new Engineer(name, employeeId, email, gitHub);
        HTML += generateEngineer(newEngineer);
        console.log(HTML);
      } else {
        const newIntern = new Intern(name, employeeId, email, school);
        HTML += generateIntern(newIntern);
        console.log(HTML);
      }
      addToTeam()
    });
};

// function to add more or exit  addToTeam();
// if yes call createTeam()
// if no call const HTMLFiledata = generateHTML(HTML)  fs.writeFile("./dist/index.html",HTMLfiledata)