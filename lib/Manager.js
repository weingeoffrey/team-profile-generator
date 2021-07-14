const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, email, id, officeNumber) {
        super(name, email, id);
        this.officeNumber = officeNumber;
        this.role = "Manager";
    };
};

module.exports = Manager;