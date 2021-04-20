const fs = require('fs');

// Initial create HTML function, plugging in the generated cards with a template literal.
function createHTML(data) {
    return `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
        <title>Team Generator</title>
    </head>
    <body>
        <style>
        body {
            box-sizing: border-box;
        }
        .container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
        #project {
            background: cornflowerblue;
            color: azure;
        }
        #person {
            background: cornflowerblue;
            color: azure;
        }
        .subject {
            font-size: larger;
            font-weight: bolder;
        }
        </style>
        <div class="jumbotron" id="project" >
            <h1 class="text-center">Development Team</h1>
        </div>
        <div class="container">
            ${allCards(data)}
        </div>
    </body>
</html>
  `
}
// Function to determine role being added, then calling the correct function
function allCards (data) {
    return data.map((data) => {
        let role = data.getRole();
        switch (role) {
            case "Manager":
                return createManager(data);
            break;
            case "Intern":
                return createIntern(data);
            break;
            case "Engineer":
                return createEngineer(data);
            break;
        }
    }).join("\n");
}


// Create a manager card
function createManager(data) {
    return `
            <div class= "card cardbody">
                <div class= "card-header" id= "person">
                    <p class="subject">${data.name}</p>
                    <div>${data.getRole()}</div>
                </div>
                <div class= "card-body">
                    <form role= "form">
                        <div class= "form-group">
                            <label>ID: ${data.id}<label>
                        </div>
                        <div class= "form-group">
                            <label>Email: <a href="mailto:${data.email}">${data.email}</a></label>
                        </div>
                        <div class= "form-group">
                            <label>Office Number: ${data.officeNumber}</label>
                        </div>
                    </form>
                </div>
            </div>`
}

// Create an intern card
function createIntern(data) {
     return `
            <div class= "card cardbody">
                <div class= "card-header" id= "person">
                    <p class="subject">${data.name}</p>
                    <div>${data.getRole()}</div>
                </div>
                <div class= "card-body">
                    <form role= "form">
                        <div class= "form-group">
                            <label>ID: ${data.id}<label>
                        </div>
                        <div class= "form-group">
                            <label>Email: <a href="mailto:${data.email}">${data.email}</a></label>
                        </div>
                        <div class= "form-group">
                            <label>School: ${data.school}</label>
                        </div>
                    </form>
                </div>
            </div>`
}
//  Create an engineer card
function createEngineer(data) {
    return `
            <div class= "card cardbody">
                <div class= "card-header" id= "person">
                    <p class="subject">${data.name}</p>
                    <div>${data.getRole()}</div>
                </div>
                <div class= "card-body">
                    <form role= "form">
                        <div class= "form-group">
                            <label>ID: ${data.id}<label>
                        </div>
                        <div class= "form-group">
                            <label>Email: <a href="mailto:${data.email}">${data.email}</a></label>
                        </div>
                        <div class= "form-group">
                            <label>GitHub: <a href="https://github.com/${data.github}">GitHub</a></label>
                        </div>
                    </form>
                </div>
            </div>`
}
// exports the createHTML function
module.exports = createHTML;