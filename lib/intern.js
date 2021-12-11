const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, schoolName){
        super(name, schoolName)

        this.school = schoolName
    };
}

module.exports = Intern;