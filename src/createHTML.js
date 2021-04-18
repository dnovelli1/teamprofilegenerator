const fs = require('fs');








function createManager(data) {
    return `
    <div class= "card cardbody">
        <div class= "card-header" id= "tab">
            <p class="name"${data.name}</p>
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
    </div>
    `
}


function createIntern(data) {
     return `
    <div class= "card cardbody">
        <div class= "card-header" id= "tab">
            <p class="name"${data.name}</p>
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
    </div>
    `
}

function createEngineer(data) {
    return `
    <div class= "card cardbody">
        <div class= "card-header" id= "tab">
            <p class="name"${data.name}</p>
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
                    <label>GitHub: <a href="https://github.com/${data.github}"></a></label>
                </div>
            </form>
        </div>
    </div>
    `
}