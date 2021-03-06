// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  
  if (!license) {
    return ``;
  }
  return`
  ![badge](https://img.shields.io/badge/License-${license}-blue)
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (!license) {
    return ``;
  }
  return `This application is licensed by [${license}](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (!license) {
    return ``;
  }
  return`## License`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
## Description 
${data.description}

You can find a video of my walk through in my google drive:
https://drive.google.com/file/d/1Q5lj2O4m2VHbJ9FiQBc4TmMrTKhuKzQ3/view

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [Test](#test) 
- [Questions](#questions)


## Installation
${data.installation}


## Usage
${data.usage}

## Contributions
${data.contributions}

## Test 
${data.test}


## Questions 

If you have any questions you can [email](mailto:${data.email}) me.
</br>
Checkout my Github at [${data.username}](https://github.com/${data.username})

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
