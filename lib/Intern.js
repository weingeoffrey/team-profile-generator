const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, email, id, school) {
        super(name, email, id);
        this.school = school;
        this.role = "Intern";
    }

    getSchool() {
        return this.school;
    }

}

module.exports = Intern;