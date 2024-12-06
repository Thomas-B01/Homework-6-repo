
// Function call to initialize app
init();
// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs"
// TODO: Create an array of questions for user input
const questions = [
    {
      type: "input",
      name: "title",
      message: "Project name"
    },
    {
      type: "input",
      name: "description",
      message: "Describe the project"
    },
    {
      type: "input",
      name: "installation",
      message: "How to install this project"
    },
    {
      type: "input",
      name: "usage",
      message: "How would you use this project"
    },
    {
      type: "input",
      name: "credits",
      message: "Who worked on this project"
    },
    {
      type: "input",
      name: "license",
      message: "What license was used"
    }
  ];
// TODO: Create a function to write README file
const writeREADME = (data) => {
    fs.writeFile('README.md', data, (err) => {
      err ? console.error(err) : console.log('README generated');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = `
 ${answers.title}


${answers.description}

${answers.installation}

${answers.usage}

${answers.credits}

${answers.license}
`;

writeREADME(readmeContent);
    })
}   


// Function call to initialize app
init();
