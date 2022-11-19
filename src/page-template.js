
function renderHtml(team) {

    // Function to return the initial html
    const renderInitialHtml = () => {
        return `<!DOCTYPE html>
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
                <div class="row justify-content-around">`
    }

    // Function to check the team roles and render team meber cards
    const renderTeam = (team) => {

        // loops through each member of the team, checks the role, and returns a template
        team.forEach((member) => {
            const role = member.role;
    
            if(role === 'Manager') {
                const { name, id, email, officeNumber } = member;
                return `
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
                            <a class="card-link" href="emailto:${email}" target="_blank">${email}/a>
                        </li>
    
                        <!-- Office Number -->
                        <li class="list-group-item">Office Number: ${officeNumber}</li>
                    </ul>
                </div>`;
            }
    
            if(role === 'Engineer') {
                const { name, id, email, github } = member;
                return `
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
            }
    
            if(role === 'Intern') {
                const { name, id, email, school } = member;
                return `
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
            }
    
            return console.log('Failed to render team members');
        });
    }

    // Function to return the closing html
    const renderClosingHtml = () => {
        return `
        <!-- Closes Gridrow -->
    </div>
    <!-- Closes Container for emplyee cards-->
</div>


</body>

</html>`
    }

    renderInitialHtml();

    renderTeam(team);

    renderClosingHtml();
};


