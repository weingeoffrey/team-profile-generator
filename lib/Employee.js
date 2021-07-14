class Employee {
    constructor(name, email) {
        this.name = name;
        this.id = Employee.incrementId();
        this.email = email;
    };

    static incrementId() {
        if (!this.latestId) {
            this.latestId = 1;
        }
        else {
            this.latestId++
        }
        return this.latestId;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };
};

module.exports = Employee;
