
# Team Profile Generator

![Github license](https://img.shields.io/badge/License-MIT-yellow)

## Description

Team Profile Generator is a Node.js command-line application that streamlines the process of creating a professional team summary webpage. By prompting the user for information about each team member (Manager, Engineer, Intern), it generates a polished, responsive HTML file with all the details, styled for clarity and modern presentation. This tool is ideal for software teams who want to quickly showcase their members and roles.

## Table of Contents
- [Description](#description)
- [Built With](#built-with)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Credits](#credits)
- [Contact](#contact)
- [License](#license)

## Built With
- JavaScript (ES6+)
- Node.js
- Inquirer.js (for CLI prompts)
- Jest (for testing)

## Installation

To install and set up the Team Profile Generator on your local machine:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Clone the repository:
  ```bash
  git clone https://github.com/squrpe/Team-Profile-Generator
  ```
4. Change into the project directory:
  ```bash
  cd Team-Profile-Generator
  ```
5. Install the required dependencies:
  ```bash
  npm install
  ```

## Usage

1. Start the application from the command line:
  ```bash
  node index.js
  ```
2. Follow the prompts to enter information for each team member (Manager, Engineer, Intern). You can add multiple engineers and interns as needed.
3. When finished, the application will generate an HTML file in the `./dist` folder (e.g., `index.html`).
4. Open the generated HTML file in your browser to view your team profile. The `style.css` file in the same folder provides the styling.

## Testing

Unit tests are provided to ensure the core functionality of the application and its classes.

To run the tests:
```bash
npm test
```
You should see output indicating all test suites have passed.

## Credits

Project developed by Lara Grocke as part of the University of Adelaide Coding Bootcamp.

## Contact

  Lara Grocke - [grockelara@gmail.com](grockelara@gmail.com)
  
  Project Link - https://github.com/squrpe/Team-Profile-Generator

  LinkedIn - https://www.linkedin.com/in/laragrocke001

## License

Distributed under the MIT License. See `LICENSE.txt` for details.

