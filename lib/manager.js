const Employee = require('./employee')

class Manager extends Employee {
    constructor(name){
        super(name)

        this.officeId = " "
    }

    getOfficeID(officeID){
        return this.officeId = officeID
    }
}

module.exports = Manager