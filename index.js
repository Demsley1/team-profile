const fs = require('fs');
const Team = require('./lib/teamBuild')
const generatePage = require('./src/profileTemplate')

// function to create a file using the content derived from the generate page required at top of page
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

// copy a file from one folder to a new folder for production
const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
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

// create a new Team object constructor, and invoke one of the methods called team profile, and use data generated from that to create team.
new Team().teamProfile()
    .then(teamData => {
        return new Team().createTeam(teamData)
    })
    .then(team => {
        console.log(team)
       return generatePage(team)
    })
    .then(pageHTML =>{
        return writeFile(pageHTML)
    })
    .then(fileResponse => {
        console.log(fileResponse);
        return copyFile(fileResponse)
    })
