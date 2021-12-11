const Employee = require('./employee')

class Manager extends Employee {
    constructor(name, officeID){
        super(name, officeID)

        this.officeId = officeID
    }
}

module.exports = Manager