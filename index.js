const fs = require('fs');
const Team = require('./lib/teamBuild')
const generatePage = require('./src/profileTemplate')

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


new Team().teamProfile()
    .then(teamData => {
        return new Team().createTeam(teamData)
    })
    .then(team => {
       return generatePage(team)
    })
    .then(pageHTML =>{
        return writeFile(pageHTML)
    })
    .then(fileResponse => {
        console.log(fileResponse);
        return copyFile(fileResponse)
    })
