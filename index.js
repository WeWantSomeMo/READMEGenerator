const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./Develop/utils/generateMarkdown')

inquirer
    .prompt ([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "Title"
        },
        {
            type: "input",
            message: "Enter a description",
            name: "Description"
        },    {
            type: "input",
            message: "How can a user install this app?",
            name: "Installation"
        },    {
            type: "input",
            message: "",
            name: "Usage"
        },    {
            type: "input",
            message: "Who Contributed to this app?",
            name: "Contributors"
        },  {
            type: "input",
            message: "How can you test this app?",
            name: "Test"
        },  {
            type: "list",
            message: "Choose a license for this app",
            name: "license",
            choices: ["MIT License", "ISC License", "License to Kill", "No License"]

        },
        
    ]) 

    .then((data) => {
        console.log(data);
        fs.writeFile('README.md', generateMarkdown(data)),
        error => {
            if (error) {
                console.log("Please insert data")
            }
            console.log("README is now available!")
        }
    })




//     GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README