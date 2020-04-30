// Use node.js to setup a series of questions prompting the user for information that will be used to fill out the README.md sections. Start with these for MVP (likely to add more later):

// Title
// Description
// Badges
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

var inquirer = require("inquirer");
var fs = require('fs');


//Setup a series of user prompts
inquirer.prompt([
    //Title
  {
    type: "input",
    name: "title",
    message: "What is the project title?"
  },
   //Description
   {
    type: "input",
    name: "description",
    message: "Give a description of the project:"
  },
  //Installation
  {
    type: "input",
    name: "installation",
    message: "What commands are required for installation?"
  },
   //Usage
   {
    type: "input",
    name: "usage",
    message: "What is the usage information?"
  },
  //Contributing
  {
    type: "input",
    name: "contributing",
    message: "How can others contribute to this project?"
  },
  //License
  {
    type: "list",
    message: "What kind of license would you like to apply to this project?",
    name: "license",
    choices: [
      "Copyright",
      "TM",
      "R"
    ]
  },
  //Tests
  {
    type: "input",
    name: "tests",
    message: "What are tests to perform on this project?"
  },
  //Badges
  {
    type: "checkbox",
    message: "Apply any of these badges?",
    name: "stack",
    choices: [
      "HTML", 
      "CSS", 
      "JavaScript", 
      "MySQL"
    ]
  },
  //Questions
  {
    type: "input",
    name: "GitHub",
    message: "What is GitHub username to associate this project to?"
  },
]).then(function(data) {

//   var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile("readTestMe.md", JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});