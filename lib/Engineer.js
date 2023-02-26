const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    //GitHub Username:
    getGithub(){
        return this.github;
    }
    //Role:
    getRole() {
        return "Engineer";
    }
};

module.exports = Engineer;