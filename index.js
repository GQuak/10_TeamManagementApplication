const inquirer = require('inquirer');
const fs = require('fs');

let data = inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is your full name?"
    },
    {
        name: "id",
        type: "input",
        message: "What is your employee ID?"
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?"
    },
]);

