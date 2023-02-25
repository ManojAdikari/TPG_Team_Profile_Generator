const Employee = require("./Employee");
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    get_Office_Number(){
        return this.officeNumber;
    }

    get_Role() {
        return "Manager";
    }
};

module.exports = Manager;