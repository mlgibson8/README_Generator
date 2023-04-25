// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'None') {
        return'[!Github License:MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    }  
        return "";       
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return '(https://opensource.org/licenses/MIT)';
    } else if (license !== 'None') {
        return "";
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'MIT') {
        return 'Licensed under the MIT license.';
    } else if (license === 'None') {
        return "";
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description
  ${data.description}
## Table of Contents
* [Installation](#installation)
* [Features](#features)
* [Laguage & Dependencies](#language&dependencies)
* [How to use](#howtouse)
* [Contributors](#contributors)
* [Testing](#testing)
* [Questions](#questions)
* [License](#license)
## Installation
    ${data.installation}
## Features
    ${data.features}
## Language & Dependencies
    ${data.language}
## How to use
    ${data.howtouse}
## Contributors
    ${data.contributors}
## Testing
    ${data.testing}
## Questions
    Please contact me at mlgibson8@gmail.com for any questions.
## License
    ${data.license}
## Deployed Application URL
    ${data.deployedURL}

`;
}

module.exports = generateMarkdown;
