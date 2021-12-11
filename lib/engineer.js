const Employee = require('./employee');

class Engineer extends Employee {
    constructor(name){
        super(name)

        this.gitHub = ' '
    }

    getUsername(val){
        return this.gitHub = `https://github.com/${val}`
    }

}

module.exports = Engineer;