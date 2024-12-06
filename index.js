// TODO: Include packages needed for this application
import inquirer from "inquirer";
//import fs from Nodefs
// TODO: Create an array of questions for user input
const questions = [
{
type: "input",
name:  "title",
message: "project name"
},
{
type: "input",
name: "description",
Message: "describe the project"
},
{
type: "input",
name: "instalation",
message: "how to install this project"
},
{
type: "input",
name: "usage",
message: "how would you use this project"
},
{
type: "input",
name: "credits",
message: "who worked on this project"
},
{
type: "input",
name: "licence",
message: "what liscence was used"
}
]
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const filePath = path.join(process.cwd(), fileName);
  fs.writeFileSync(filePath, data, "utf-8");
  console.log(`README file has been generated: ${fileName}`);
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
      const readmeContent = `
# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## License
This project is licensed under the ${answers.license} license.
`;

      writeToFile("README.md", readmeContent);
    })
    .catch((error) => {
      console.error("Error initializing app:", error);
    });
}   


// Function call to initialize app
init();
