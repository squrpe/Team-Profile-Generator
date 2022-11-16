// Initialise the packages & classes required for the application

const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');

// Team array of Employees
const teamArray = [];

// Always have a manager, thus a manager function
// is created seperately to the other employees

const addManager = () => {

    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
            message: "Enter the manager's name:", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("\n Please enter the manager's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the manager's ID:",
            validate: idInput => {
                if  (isNaN(idInput) || !idInput) {
                    console.log ("\n Please enter a valid manager's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the manager's email:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('\n Please enter a valid email.')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter the manager's office number:",
            validate: onInput => {
                if  (isNaN(onInput) || !onInput) {
                    console.log ("\n Please enter a valid office number.")
                    return false; 
                } else {
                    return true;
                }
            }
        }

    ])

    .then(managerInput => {

        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
    
    })
    
}

// Add Employee function that allows the user to choose
// wether they're adding an engineer or intern & the function
// is all done in one

const addEmployee = () => {

    return inquirer.prompt ([

        {
            type: 'list',
            name: 'role',
            message: "Enter your next employee's role:",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter the name of the employee:", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("\n Please enter the employee's name.");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter the employee's ID:",
            validate: idInput => {
                if  (isNaN(idInput) || !idInput) {
                    console.log ("\n Please enter a valid employee's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter the employee's email:",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("\n Please enter a valid email.")
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Enter the employee's Github Username:",
            when: (input) => input.role === "Engineer",
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log ("\n Please enter a valid employee's Github Username.")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Enter the intern's school:",
            when: (input) => input.role === "Intern",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log ("\n Please enter the intern's school.")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmMoreEmployee',
            message: 'Do you need to add more team members?',
            default: false
        }

    ])

    .then(employeeData => {

        let employeeTemp;
        let { name, id, email, role, github, school, confirmMoreEmployee } = employeeData; 

        if (role === "Engineer") {
            employeeTemp = new Engineer (name, id, email, github);
        } else if (role === "Intern") {
            employeeTemp = new Intern (name, id, email, school);
        }

        teamArray.push(employeeTemp); 

        if (confirmMoreEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })
    
}

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, error => {
        if (error) {
            console.log(error);
            return;
        } else {
            console.log("Successful! Open index.html for your generated team!");
        }
    })

};

addManager()
  .then(addEmployee)
  .then(teamArray => {

    return generateHTML(teamArray);

  })
  .then(pageHTML => {

    return writeFile(pageHTML);

  })
  .catch(error => {

    console.log(error);
    
  });





