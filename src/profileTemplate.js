const makeManager = Manager => {    
    return  `
    <section class="team-card card m-2">
        <div class="card-top team-top">
            <h3 class="m-2 text-light">${Manager.name}</h3>
            <h4 class="text-white m-3"><img class="icon" src="./images/manager-icon-22.png">  ${Manager.role}</h4>
        </div>
        <div class="card-center list-group-flush p-4">
            <p class="list-group-item">I.D: ${Manager.id}</p>
            <p class="list-group-item">Email:   <a  href="mailto: ${Manager.email}">${Manager.email}</a></p>
            <p class="list-group-item">Office I.D:  ${Manager.officeId}</p>
        </div>
    </section> 
    `
};

const makeEngineer = Engineers => {
    Engineers.forEach(x => {
        return `
        <section class="team-card card m-2">
            <div class="card-top team-top">
                <h3 class="m-2 text-light">${x.name}</h3>
                <h4 class="m-3 text-white"><img class="icon" src="./images/engineerIcon.png">  ${x.role}</h4>
            </div>
            <div class="card-center list-group-flush p-4">
                <p class="list-group-item">I.D: ${x.id}</p>
                <p class="list-group-item">Email:   <a  href="mailto: ${x.email}">${x.email}</a></p>
                <p class="list-group-item">GitHub Username:  <a href="https://github.com/${x.github}" target="_blank">${x.github}</a></p>
            </div>
        </section> 
        `
    })
};


    
const makeIntern = Interns => {
    return Interns.forEach(x => {
        `
        <section class="team-card card m-2">
                <div class="card-top team-top">
                <h3 class="m-2 text-light ">${x.name}</h3>
                <h4 class="text-white m-3"><img class="icon" src="./images//internIcon.png">  ${x.role}</h4>
            </div>
            <div class="card-center list-group-flush p-4">
                <p class="list-group-item">I.D: ${x.id}</p>
                <p class="list-group-item">Email:   <a  href="mailto: ${x.email}">${x.email}</a></p>
                <p class="list-group-item fst-italic">School: ${x.school}</p>
            </div>
    </section>
        `
    });
}

module.exports = Team => { 
    console.log(Team)
    const { Manager, Engineers, Interns } = Team

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="header">
            <h1>TEAM</h1>
        </header>
        <main class="body">  
                ${makeManager(Manager)}
                ${makeEngineer(Engineers)}
                ${makeIntern(Interns)}
        </main>
            
        <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}