// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badge = "";
  if (license === "MIT License") {
    badge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "Apache") {
    badge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GPL 3.0") {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return license ? "[License](#license)" : "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var text = "";
  if (license === "MIT License") {
    text = "## License\n\n[MIT License](https://opensource.org/licenses/MIT)";
  } else if (license === "Apache") {
    text =
      "## License\n\n[Apache License](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "GPL 3.0") {
    text =
      "## License\n\n[GPL 3.0 License]https://www.gnu.org/licenses/gpl-3.0)";
  }
  return text;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}

  ## License

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - ${renderLicenseLink(data.license)}

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Contributing

  ${data.contribution}

  ## Tests

  ${data.test}

  ## Questions
  GitHub: https://github.com/${data.github}

  You can also reach me at ${data.email} with any additional questions.

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
