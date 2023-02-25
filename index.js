const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");
//-------------Arrays for each Class; Manager, Engineer, Intern and Employee:
const managers = [];
const engineers = [];
const interns = [];
const employee =[];