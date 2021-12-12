const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name){
        super(name)

        this.github = " "
    }

    getGitHub(username){
        return this.github = username
    }

}

module.exports = Engineer;