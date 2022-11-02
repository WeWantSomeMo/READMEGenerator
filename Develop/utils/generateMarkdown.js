function renderLicense(license) {
    if (license === 'License to Kill') {
        return 'Very well, Mr. Bond'
    }
}

function generateMarkdown(data) {
    return `
        - ${data.Title}

        ## Description
        - ${data.Description}

        ## Table of Contents 
        
        -[License](#license)
        -[Installation](#installation)
        -[Usage](#Usage)
        -[Features](#features)
        -[Credits](#contributors & credits)
        -[Test](#Test)
        -[Questions](#questions)
        -[How to contribute](#how to contribute)

        
        ## License
        - ${renderLicense(data.license)}

        Refer to ['https://choosealicense.com/']('https://chooselicense.com/').$

        ## Installation
        To install this application, please follow the steps below:
        - ${data.Installation}


        ## Usage
        ![alt text] (assets/images/screenshot.png)
        - ${data.Usage}

        ## Features
        - ${data.features}

        ## Contributors & Credits

        - ${data.Contributors}

        ## Test

        - ${data.Test}

        ## Questions
        If you have questions about the reportError, open an issue or contact me directly at . You can find more of my work at https://github.com/WeWantSomeMo)

        ## How to contribute

       
        The [Contributor Covenant](WEB URL) is an industry standard, but you can always write your own if you'd prefer.
    `;
}

module.exports = generateMarkdown;
// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}
