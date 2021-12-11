class Employee {
    constructor (name) {
        this.role = '';
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
            return this.role = 'Manager'
        }else {
           this.role = val
        }
    }
}

// Add methods that get id email and role for in employee that will work for each team memeber. 
// Then add methods for te individual iteam that need to be gotten in each character class.
// name gets passed in as a parameter for each new concstructor 

module.exports = Employee;