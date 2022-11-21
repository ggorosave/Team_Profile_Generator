const fs = require('fs');

function renderHtml(team) {

    const managerArr = [];
    const engineerArr = [];
    const internArr = [];

    // Loops through the team to check the role, render the info in the correct card, then push it to the correct array
    const renderCards = (team) => {
        team.forEach((member) => {
            const role = member.role;

            // Looks for the role to equal "Manager", inputs data input template, then pushes card to an array
            if (role === 'Manager') {
                const { name, id, email, officeNumber } = member;
                const manager = `
                
                <!-- Manager -->
                <div class="card employee-card m-2 col-sm-12 col-md-4">
    
                    <!-- Header -->
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-subtitle">Manager</h3>
                    </div>
    
                    <!-- Group List -->
                    <ul class="list-group list-group-flush">
    
                        <!-- ID -->
                        <li class="list-group-item">ID: ${id}</li>
    
                        <!-- Email -->
                        <li class="list-group-item">Email:
                            <a class="card-link" href="emailto:${email}" target="_blank">${email}</a>
                        </li>
    
                        <!-- Office Number -->
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>`;

                managerArr.push(manager);

            // Looks for the role to equal "Engineer", inputs data input template, then pushes card to an array 
            } else if (role === 'Engineer') {
                const { name, id, email, github } = member;
                const engineer =  `
                
                <!-- Engineer -->
                <div class="card employee-card m-2 col-sm-12 col-md-4">
    
                    <!-- Header -->
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-subtitle text-muted">Engineer</i></h3>
                    </div>
    
                    <!-- Group List -->
                    <ul class="list-group list-group-flush">
    
                        <!-- ID -->
                        <li class="list-group-item">ID: ${id}</li>
    
                        <!-- Email -->
                        <li class="list-group-item">Email:
                            <a class="card-link" href="emailto:${email}" target="_blank">${email}</a>
                        </li>
    
                        <!-- GitHub -->
                        <li class="list-group-item">GitHub:
                            <a class="card-link" href="https://github.com/${github}" target="_blank">${github}</a>
                        </li>
                    </ul>
                </div>`;

                engineerArr.push(engineer);

            // Looks for the role to equal "Intern", inputs data input template, then pushes card to an array
            } else if (role === 'Intern') {
                const { name, id, email, school } = member;
                const intern = `
                
                <!-- Intern -->
                <div class="card employee-card m-2 col-sm-12 col-md-4">
    
                    <!-- Header -->
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-subtitle text-muted">Intern</h3>
                    </div>
    
                    <!-- Group List -->
                    <ul class="list-group list-group-flush">
    
                        <!-- ID -->
                        <li class="list-group-item">ID: ${id}</li>
    
                        <!-- Email -->
                        <li class="list-group-item">Email:
                            <a class="card-link" href="emailto:${email}" target="_blank">${email}</a>
                        </li>
    
                        <!-- School -->
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>`;

                internArr.push(intern);
            }
        });
    }

    const renderManagerCard = (team) => {
        team.forEach((member) => {
    
            const role = member.role;
            if (role === 'Manager') {
                const { name, id, email, officeNumber } = member;
                const manager = `
                
                <!-- Manager -->
                <div class="card employee-card m-2 col-sm-12 col-md-4">
    
                    <!-- Header -->
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-subtitle">Manager</h3>
                    </div>
    
                    <!-- Group List -->
                    <ul class="list-group list-group-flush">
    
                        <!-- ID -->
                        <li class="list-group-item">ID: ${id}</li>
    
                        <!-- Email -->
                        <li class="list-group-item">Email:
                            <a class="card-link" href="emailto:${email}" target="_blank">${email}</a>
                        </li>
    
                        <!-- Office Number -->
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>`;

                managerArr.push(manager);
            }
        });
    }

    const renderEngineerCard = (team) => {
        team.forEach((member) => {
            const role = member.role;
            if (role === 'Engineer') {
                const { name, id, email, github } = member;
                const engineer =  `
                
                <!-- Engineer -->
                <div class="card employee-card m-2 col-sm-12 col-md-4">
    
                    <!-- Header -->
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-subtitle text-muted">Engineer</i></h3>
                    </div>
    
                    <!-- Group List -->
                    <ul class="list-group list-group-flush">
    
                        <!-- ID -->
                        <li class="list-group-item">ID: ${id}</li>
    
                        <!-- Email -->
                        <li class="list-group-item">Email:
                            <a class="card-link" href="emailto:${email}" target="_blank">${email}</a>
                        </li>
    
                        <!-- GitHub -->
                        <li class="list-group-item">GitHub:
                            <a class="card-link" href="https://github.com/${github}" target="_blank">${github}</a>
                        </li>
                    </ul>
                </div>`;

                engineerArr.push(engineer);
            }
        });
    }

    const renderInternCard = (team) => {
        team.forEach((member) => {
            const role = member.role;
            if (role === 'Intern') {
                const { name, id, email, school } = member;
                const intern = `
                
                <!-- Intern -->
                <div class="card employee-card m-2 col-sm-12 col-md-4">
    
                    <!-- Header -->
                    <div class="card-header">
                        <h2 class="card-title">${name}</h2>
                        <h3 class="card-subtitle text-muted">Intern</h3>
                    </div>
    
                    <!-- Group List -->
                    <ul class="list-group list-group-flush">
    
                        <!-- ID -->
                        <li class="list-group-item">ID: ${id}</li>
    
                        <!-- Email -->
                        <li class="list-group-item">Email:
                            <a class="card-link" href="emailto:${email}" target="_blank">${email}</a>
                        </li>
    
                        <!-- School -->
                        <li class="list-group-item">School: ${school}</li>
                    </ul>
                </div>`;

                internArr.push(intern);
            }
        });
    }

    // Takes the manager, engineer, and intern arrays, joins them into a single string, then inputs them into the html template.
    const generateHtml = (managerArr, engineerArr, internArr) => {

        const managerCard = managerArr.join('');
        const engineerCards = engineerArr.join('');
        const internCards = internArr.join(''); 

        const html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
    
        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    
        <!-- Google Fonts -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    
        <!-- Custom CSS -->
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <!-- Header -->
        <div class="jumbotron jumbotron-fluid">
            <h1 class="display-5 text-center">My Team</h1>
        </div>
    
        <!-- Container for Employee Cards -->
        <div class="container-md">
    
            <!-- Grid Row -->
            <div class="row justify-content-around">
                ${managerCard}
                ${engineerCards}
                ${internCards}
    
                <!-- Closes Gridrow -->
            </div>
            <!-- Closes Container for emplyee cards-->
        </div>
    
    
    </body>
    
    </html>`

        fs.writeFile('./dist/index.html', html, (error) => error ? console.log(error) : console.log('HTML initialized...'));
    }

    // renderManagerCard(team);
    // renderEngineerCard(team);
    // renderInternCard(team);
    renderCards(team);

    generateHtml(managerArr, engineerArr, internArr);

}




module.exports = {
    renderHtml,
}