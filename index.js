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
      "MIT",
      "GPLv2",
      "Apache",
      "Other"
    ]
  },
  //Tests
  {
    type: "input",
    name: "tests",
    message: "What are tests to perform on this project?"
  },
  //Badges
//   {
//     type: "checkbox",
//     message: "Apply any of these badges?",
//     name: "badges",
//     choices: [
//       "HTML", 
//       "CSS", 
//       "JavaScript", 
//       "MySQL"
//     ]
//   },
  //GitHub username
  {
    type: "input",
    name: "gitHub",
    message: "What is GitHub username to associate this project to?"
  },
  //email
  {
    type: "input",
    name: "email",
    message: "What's your email?"
  },
]).then(function(data) {
    console.log("Success!");

//////////BADGE////////////
//can use shields.io to insert badge
let license = "";
const badges = function(){
if(data.license === "MIT"){
    license = "![MIT](https://img.shields.io/badge/license-MIT-green)";
    return license
} else if (data.license === "Apache"){
    license = "![Apache](https://img.shields.io/badge/license-Apache-blue)";
    return license
} else if (data.license === "GPLv2"){
    license = "![GPLv2](https://img.shields.io/badge/license-GPLv2-blue)";
    return license
} else if (data.license === "ISC"){
    license = "![ISC](https://img.shields.io/badge/license-ISC-lightgrey)";
    return license
} else{
    license = "![other](https://img.shields.io/badge/license-other-lightgrey)";
    return license
}}
badges();
console.log(license);

// I can insert the markdown template here and just insert the variables?

    readMe = 
`# ${data.title}

### Jeffrey Adamo  
UW Full Stack BootCamp  
[${data.title}](#) at GitHub Pages  
(date)
***

${license}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

Please run the following command to install dependencies:


${data.installation}


## Usage

${data.usage}

## License

${license}

## Contributing

${data.contributing}

## Tests

To run tests, run the following command:


${data.tests}


## Questions

If you have any questions about the repo, open an issue or contact [${data.gitHub}](http://www.github.com/${data.gitHub}) or contact directly at ${data.email}. `;


    fs.writeFile("readTestMe2.md", readMe, function(err) {

            if (err) {
              return console.log(err);
            }
            console.log("OMG");
          });
});