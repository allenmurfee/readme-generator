// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your project title.",
    name: "title",
  },
  {
    type: "input",
    message: "Enter your project description.",
    name: "description",
  },
  {
    type: "input",
    message: "Enter your project installation instructions.",
    name: "install",
  },
  {
    type: "input",
    message: "Enter your project usage information.",
    name: "usage",
  },
  {
    type: "input",
    message: "Enter your project contribution guidelines.",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter your project test instructions.",
    name: "test",
  },
  {
    type: "input",
    message: "Enter your GitHub username.",
    name: "github",
  },
  {
    type: "input",
    message: "Enter your email address.",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return fs.writeFile(fileName, genMarkdown(data), (err) => {
    return err ? console.log("Error.") : console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log("Generating README...");
    writeToFile("newREADME.md", answers);
  });
}

// Function call to initialize app
init();
