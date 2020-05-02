var inquirer = require("inquirer");
var fs = require('fs');
const axios = require("axios");

//Setup a series of user prompts
inquirer.prompt([
    //Title
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
    default: "README"
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
    message: "What commands are required for installation?",
    default: "npm i"
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
      "ISC",
      "Other"
    ]
  },
  //Tests
  {
    type: "input",
    name: "tests",
    message: "What are tests to perform on this project?"
  },
   //GitHub username
  {
    type: "input",
    name: "gitHub",
    message: "What is GitHub username to associate this project to?"
  },
  ]).then(function(data) {
    console.log("User input received");

//////////BADGE////////////
//Use shields.io to insert badge for license
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

//////axious call to github
let avatar = "";
let email = null;
function emailCheck(email){
    if(email === null){
        const noEmail = "GitHub email set as private.";
        return noEmail
    } else if (email === ""){
      return email
    } else {
        return email;
    }
}
///////////////////////////////////////////
///README TEMPLATE///
 //Insert template literals and variable into the markdown template:
function genReadme(avatar, email){
let readMe = 
`# ${data.title}

Jeffrey Adamo  
UW Full Stack BootCamp  
[${data.title}](#) at GitHub Pages  
${license}  
***

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

### Please run the following command to install dependencies:


${data.installation}


## Usage

${data.usage}

## License

${license}

## Contributing

${data.contributing}

## Tests

### To run tests, run the following command:


${data.tests}


## Questions

For questions, open an issue or contact my GitHub  


<img src="`+avatar+`" width="75">    

@ [${data.gitHub}](http://www.github.com/${data.gitHub})  
<font size="1">`+emailCheck(email)+`</font> 

 `;

 markDown(readMe);
}
 
//Create a markdown file//

function markDown(readMe) { fs.writeFile("README_Generated.md", readMe, function(err) {
  if (err) {
      return console.log(err);
  }
  console.log("Look for README_Generated.md in folder");
  });
}


axios
  .get(`https://api.github.com/users/${data.gitHub}`)
  .then(function(res) {
    avatar = res.data.avatar_url;
    email = res.data.email;
    emailCheck(email);
    genReadme(avatar, email);
    
  })
  .catch(function(err) {
    console.log("no username")
    avatar = "no pic";
    email = "no email";
    genReadme(avatar, email);
   
  });
  })