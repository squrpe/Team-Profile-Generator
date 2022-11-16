const generateManagerCard = (data) => {
    return `

    <div class="col-4 cardgroup">
        <div class="card">
            <div class="card-body">
                <div class="title">
                    <h3 class="name">${data.name}</h3>
                    <h4 class="role"><span class="material-symbols-outlined">handshake</span>
                        Manager
                    </h4>
                </div>
                <div class="information">
                    <p class="id">ID: ${data.id}</p>
                    <p class="email">Email: <a href='mailto:${data.email}'>${data.email}</a></p>
                    <p class="office-number">Office Number: ${data.officenumber}</p>
                </div>
            </div>
        </div>
    </div>
    
    `
}

const generateEngineerCard = (data) => {
    return `

    <div class="col-4 cardgroup">
        <div class="card">
            <div class="card-body">
                <div class="title">
                    <h3 class="name">${data.name}</h3>
                    <h4 class="role"><span class="material-symbols-outlined">code_blocks</span>
                        Engineer
                    </h4>
                </div>
                <div class="information">
                    <p class="id">ID: ${data.id}</p>
                    <p class="email">Email: <a href='mailto:${data.email}'>${data.email}</a></p>
                    <p class="github">Github: <a href="https://github.com/${data.github}">${data.github}</a></p>
                </div>
            </div>
        </div>
    </div>

    `
}

const generateInternCard = (data) => {
    return `
    <div class="col-4 cardgroup">
        <div class="card">
            <div class="card-body">
                <div class="title">
                    <h3 class="name">${data.name}</h3>
                    <h4 class="role"><span class="material-symbols-outlined">support_agent</span>
                        Intern
                    </h4>
                </div>
                <div class="information">
                    <p class="id">ID: ${data.id}</p>
                    <p class="email">Email: <a href='mailto:${data.email}'>${data.email}</a></p>
                    <p class="school">School: ${data.school}</p>
                </div>
            </div>
        </div>
    </div>
    `
}

generateHTML = (data) => {

    // Temp array for cards
    cardArray = [];

    for(let i = 0; i < data.length; i++) {

        const employee = data[i];
        const role = employee.getRole();

        // If statements that call the card generator functions

        if(role === "Manager") {

            const managerCard = generateManagerCard(employee);
            cardArray.push(managerCard);

        }

        if(role === "Engineer") {

            const engineerCard = generateEngineerCard(employee);
            cardArray.push(engineerCard);

        }

        if(role === "Intern") {

            const internCard = generateInternCard(employee);
            cardArray.push(internCard);
            
        }
    }

    // Join the strings in the cardArray
    const teamCards = cardArray.join('');

    // Return
    return generatePage(teamCards);

}

const generatePage = (teamCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,600,0,0" />
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        
        <header>
            <nav>
                <h1 class="text-center">My Team</h1>
            </nav>
        </header>
    
        <main>
            <div>
                <div class="row justify-content-center">
    
                    ${teamCards}
    
                </div>
            </div>
        </main>
    
    </body>
    </html>
    `
}

module.exports = generateHTML;