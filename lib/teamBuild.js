const inquirer = require('inquirer');
const Manager = require('./manager');
const Engineer = require('./engineer');
const Intern = require('./intern');

class Team {
    constructor() {
    this.Manager = {}
    this.Engineers = []
    this.Interns = []
    }

    // method in Team class, that starts the prompts for science
    teamProfile()  {
        return inquirer.prompt([
            {
                name: 'name',
                message: 'What is your name?',
                validate: name => {
                    if(name){
                        return true;
                    }
                    else {
                        console.log("Please enter team managers name.")
                        return false;
                    }
                }
            },
            {
                name: 'id',
                message: "What is the team manager's ID?",
                validate: id => {
                    if(id){
                        return true;
                    }
                    {
                        console.log("What is the managers i.d");
                        return false;
                    };
                }
            },
            {
                name: 'email',
                message: 'What is team managers work email address?',
                validate: email => {
                    if(email){
                        return true;
                    }
                    else {
                        console.log("Provide a valid email address")
                        return false
                    }
                }
            },
            {
                name: 'office',
                message: 'What is the office number for the team manager?',
                validate: officeNumber => {
                    if(officeNumber){
                        return true;
                    }
                    else {
                        console.log("you did not supply an office number")
                        return false;
                    }
                }
            }
        ]).then( teamData => {
            return this.addTeam(teamData);
        });
    };

    // method that adds each teammember based on choices in inquirer prompts
    addTeam(teamData) {
        const addEngineer = teamData => {
            // if no property exists with the array for members then create one 
            if(!teamData.members){
                teamData.members = [];
            }
            return inquirer.prompt([
                {
                    name: 'name',
                    message: 'Enter the team members name (required):',
                    validate: name => {
                        if(name){
                            return true;
                        }
                        else{
                            console.log('Member needs to have a name value')
                            return false;
                        }
                    }
                },
                {
                    name: 'id',
                    message: 'What is this engineers ID number?',
                    validate: ID => {
                        if(ID){
                            return true;
                        }else{
                            return false;
                        }
                    }
                },
                {
                    name: 'email',
                    message: 'Provide the teammembers email address',
                    validate: email => {
                        if(email){
                            return true;
                        }{
                            return false;
                        }
                    }
                },
                {
                    name: 'username',
                    message: "What is this engineer's GitHub username?",
                    validate: username => {
                        if(username){
                            return true;
                        }else{
                            return false;
                        }
                    }
                }
            ]).then(teammember => {
                // at new index push into members array an object for answers with engineer as the key and answers object as the value
                teamData.members.push({'Engineer': teammember})
                return this.addTeam(teamData);
            });
        };

        const addIntern = teamData => {
            if(!teamData.members){
                teamData.members = [];
            }
            return inquirer.prompt([
                {
                    name: 'name',
                    message: 'Enter team members name (required):',
                    validate: name => {
                        if(name){
                            return true;
                        }
                        else{
                            console.log('Member needs to have a name value')
                            return false;
                        }
                    }
                },
                {
                    name: 'id',
                    message: 'What is the Interns ID number?',
                    validate: ID => {
                        if(ID){
                            return true;
                        }else{
                            return false;
                        }
                    }
                },
                {
                    name: 'email',
                    message: 'What is the Interns email address?',
                    validate: email => {
                        if(email){
                            return true;
                        } else {
                            return false;
                        }
                    }
                },
                {
                    name:'school',
                    message: 'Provide this Interns School name:',
                },
            ]).then(teammember => {
                // push into members array a new for answers with 'Intern' as the key and the asnwer object as the value
                teamData.members.push({'Intern' : teammember})
                return this.addTeam(teamData);
            });
        }

        // code that iquires the above two fucntions, asking wheter you would like to continue, then menu with options for which team member you would like to add. 
        return inquirer.prompt([
            {
                type: 'confirm',
                name: 'confirmAdd',
                message: 'Would you like to add a team member?',
                default: false
            },
            {
                type: 'checkbox',
                name: 'teammember',
                message: 'Choose a teammembers role to continue building your team:',
                choices:['Engineer', 'Intern'],
                when: ({ confirmAdd }) => {
                    if( confirmAdd ){
                        return true;
                    }else{
                        return false;
                    }
                }
            }
        ]).then(member => {
            // based on choice you would be directed to one of the above two choices and then prompted with a series of questions based on the teammember you choose in the second question.
            if(member.teammember == 'Engineer'){
                return addEngineer(teamData);
            }else if(member.teammember == 'Intern'){ 
                return addIntern(teamData);
            }else{
                return teamData;
            }
        }); 
    }

    // method that adds the data to each property in the parent object
    createTeam(teamData){
        const { name, office, email, id, members } = teamData
        this.Manager = new Manager(name)
        this.Manager.getID(id);
        this.Manager.getRole('Manager');
        this.Manager.getEmail(email);
        this.Manager.getOfficeID(office);
        
        // if there is a members object filter out each instance Intern object and Engineer object.
        if (members) {
        var Engineers = members.filter(createEngineer)
        var Interns = members.filter(createIntern)
        } else {
            return (this)
        };

        function createIntern(role){
            const { Intern } = role
            return Intern
        }

        function createEngineer(role) {
            const { Engineer } = role
            return Engineer
        }

        for(let i = 0; i < Interns.length; i++){
            const { name, id, email, school } = Interns[i].Intern
            this.Interns.push(new Intern(name));
            this.Interns[i].getID(id);
            this.Interns[i].getRole('Intern');
            this.Interns[i].getEmail(email);
            this.Interns[i].getSchool(school);
            
        }

        for(let i = 0; i < Engineers.length; i++){
            const { name, id, email, username } = Engineers[i].Engineer
            this.Engineers.push(new Engineer(name));
            this.Engineers[i].getID(id);
            this.Engineers[i].getRole('Engineer');
            this.Engineers[i].getEmail(email);
            this.Engineers[i].getGitHub(username);
        }

        return (this)
    }
};

module.exports = Team


