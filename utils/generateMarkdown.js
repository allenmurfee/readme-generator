// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description

  ${data.description}

  ##Table of Contents
  // Need to add still.

  ##Installation

  ${data.install}

  ##Usage

  ${data.usage}

  ##Contributing

  ${data.contribution}

  ##License

  // Need to add license info

  ##Tests

  ${data.test}

  ##Questions
  GitHub: ${data.github}

  You can also reach me at ${data.email} with any additional questions.
`;
}

module.exports = generateMarkdown;
