
// Function to generate initial portion of HTML page
function renderInitialHtml(name, id, email, officeNumber) {
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
            <div class="row justify-content-around">
    
                <!-- Manager -->
                <div class="card employee-card m-2 col-sm-12 col-md-4">
    
                    <!-- Header -->
                    <div class="card-header">
                        <h2 class="card-title">${manager.name}</h2>
                        <h3 class="card-subtitle">Manager</h3>
                    </div>
    
                    <!-- Group List -->
                    <ul class="list-group list-group-flush">
    
                        <!-- ID -->
                        <li class="list-group-item">ID: ${manager.id}</li>
    
                        <!-- Email -->
                        <li class="list-group-item">Email:
                            <a class="card-link" href="emailto:${manager.email}" target="_blank">${manager.email}</a>
                        </li>
    
                        <!-- Office Number -->
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>
    `
}

// Function to render engineer card
function renderEngineerCard(name, id, email, github) {
    return `
    <!-- Engineer -->
    <div class="card employee-card m-2 col-sm-12 col-md-4">

        <!-- Header -->
        <div class="card-header">
            <h2 class="card-title">${engineer.name}</h2>
            <h3 class="card-subtitle text-muted">Engineer</i></h3>
        </div>

        <!-- Group List -->
        <ul class="list-group list-group-flush">

            <!-- ID -->
            <li class="list-group-item">ID: ${engineer.id}</li>

            <!-- Email -->
            <li class="list-group-item">Email:
                <a class="card-link" href="emailto:${engineer.email}" target="_blank">${engineer.email}</a>
            </li>

            <!-- GitHub -->
            <li class="list-group-item">GitHub:
                <a class="card-link" href="https://github.com/engineer" target="_blank">${engineer.github}</a>
            </li>
        </ul>
    </div>`
}

// Function to render intern card
function renderInternCard(name, id, email, school) {
    return `
    <!-- Intern -->
    <div class="card employee-card m-2 col-sm-12 col-md-4">

        <!-- Header -->
        <div class="card-header">
            <h2 class="card-title">${intern.name}</h2>
            <h3 class="card-subtitle text-muted">Intern</h3>
        </div>

        <!-- Group List -->
        <ul class="list-group list-group-flush">

            <!-- ID -->
            <li class="list-group-item">ID: ${intern.id}</li>

            <!-- Email -->
            <li class="list-group-item">Email:
                <a class="card-link" href="emailto:${intern.email}" target="_blank">${intern.email}</a>
            </li>

            <!-- School -->
            <li class="list-group-item">School: ${intern.school}</li>
        </ul>
    </div>`
}

// Function to render closing portion of html
function renderClosingHtml() {
    return `
    </div>
</div>


</body>

</html>`
}

module.exports = {
    renderInitialHtml,
    renderEngineerCard,
    renderInternCard,
    renderClosingHtml
}

function renderHtml(team) {

    const renderManager = (manager) => {
        return ``
    }

    renderEngineer
}