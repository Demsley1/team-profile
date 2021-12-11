const inquirer = require('inquirer');
const fs = require('fs');

const teamProfile = () => {
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
        },
        /*{
            type: 'checkbox',
            name: 'teammember',
            message: 'Choose a team members role to continue building your team',
            choices: ['Engineer', 'Intern', 'Finish Building Team'],
            filter: teammember => {
                if(teammember == 'Finish Building Team'){
                    return " ";
                }else if(teammember == 'Engineer'){
                    return 'Engineer'; 
                } else {
                    return 'Intern';
                }
            }
        }*/
    ])/*.then( teamData => {
        if(teamData.teammember == 'Engineer'){
           return addEngineer(teamData);
        } else if (teamData.teammember == 'Intern'){
            return addIntern(teamData);
        } else{
            return teamData;
        };
    });*/
};

const addTeam = teamData => {
    const addEngineer = teamData => {
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
                name: 'ID',
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
            teamData.members.push({'Engineer': teammember})
            return addTeam(teamData);
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
                name: 'ID',
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
            teamData.members.push({'Intern' : teammember})
            return addTeam(teamData);
        });
    }

    // code that iquires the above two fucntions, asking wheter you would like to continue, then which team member you would like to add. 
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

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err){
                reject(err);
                return;
            }
            resolve({
                name: 'ok',
                message: 'The file was created'
            });
        });
    })
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/file.css', './dist/style.css', err => {
            if (err){
                reject(err)
                return;
            }
            resolve({
                name: 'ok',
                message: 'file was copied'
            });
        });
    });
};


teamProfile()
    .then(addTeam)
    .then(teamData => {
        return teamPage(teamData)
    })
    .then(employee => {
        return teamPage(employee)
    })
    /*.then(pageHTML =>{
        return writeFile(pageHTML)
    })
    .then(fileResponse => {
        console.log(fileResponse);
        return copyFile
    })*/