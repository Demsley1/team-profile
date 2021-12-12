const Employee = require('./employee');

class Intern extends Employee {
    constructor(name){
        super(name)

        this.school = " "
    };

    getSchool(schoolName){
        return this.school = schoolName
    }
}

module.exports = Intern;