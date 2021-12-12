class Employee {
    constructor (name) {
        this.role = ' ';
        this.name = name;
        this.id = ' '
        this.email = ' '
    }

    getID(val) {
        return this.id = val
    }

    getEmail(val){
        return this.email = val
    }

    getRole(val) {
        //this function gets the persons role in the company
        if(!val){
            return this.role = 'Employee'
        }else {
           return this.role = val
        }
    }
}


module.exports = Employee;