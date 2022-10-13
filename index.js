// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const genMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "Enter your project title.",
    name: title,
  },
  {
    type: "input",
    message: "Enter your project description.",
    name: description,
  },
  {
    type: "input",
    message: "Enter your project installation instructions.",
    name: install,
  },
  {
    type: "input",
    message: "Enter your project usage information.",
    name: usage,
  },
  {
    type: "input",
    message: "Enter your project contribution guidelines.",
    name: contribution,
  },
  {
    type: "input",
    message: "Enter your project test instructions.",
    name: test,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
