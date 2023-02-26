
//div:
const managerdiv = (manager) => {
    return `
    <article class="flex-item">
    <div class="item-header">
        <h2 style="margin-bottom: 0px;margin-top: 10px;margin-left: 5px; margin-right: 5px;">${manager. getName()}</h2>
        <h3 class="card-title"><img src="../src/manager_man_male_.png"><i
                class="fas fa-glasses mr-2"></i>${manager.getRole()}</h3>
    </div>
    <div class="item-body">
        <div class="text">
            <h5>Employee Id : <span id="item-Id">${manager.getId()}</span> </h5>
            <h5>Email : <a href="${manager.getEmail()}"> <span
                        id="item-Email">${manager.getEmail()}</span></a> </h5>
            <h5>Office Number : <span id="item-office-number">${manager.getOfficeNumber()}</span></h5>
        </div>
    </div>
</article>

    `;
};
//Engineer div: 
const engineerdiv = (engineer) => {
    return `

    <article class="flex-item">
    <div class="item-header">
        <h2 style="margin-bottom: 0px;margin-top: 10px;margin-left: 5px; margin-right: 5px;">${engineer.getName()}</h2>
        <h3 class="card-title"><img src="../src/administrator_syst.png"><i
                class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>
    <div class="item-body">
        <div class="text">
            <h5>Employee Id : <span id="item-Id">${engineer.getId()}</span> </h5>
            <h5>Email : <a href="${engineer.getEmail()}"><span id="item-Email">${engineer.getEmail()}</span>
                </a> </h5>

            <h5>GitHub:<a href="https://github.com/${engineer.getGithub()}" target="_blank"
                    rel="noopener noreferrer"> <span
                        id="item-GitHub">https://github.com/${engineer.getGithub()}</span> </a> </h5>

        </div>
    </div>
</article>

    `;
};
//Intern div: 
const interndiv = (intern) => {
    return `
  
    <article class="flex-item">
    <div class="item-header">
        <h2 style="margin-bottom: 0px;margin-top: 10px;margin-left: 5px; margin-right: 5px;">${intern.getName()}</h2>
        <h3 class="card-title"><img src="../src/student.png"><i
                class="fas fa-glasses mr-2"></i>${intern.getRole()}</h3>
    </div>
    <div class="item-body">
        <div class="text">
            <h5>Employee Id : <span id="item-Id">${intern.getId()}</span> </h5>
            <h5>Email : <a href="${intern.getEmail()}"><span id="item-Email">${intern.getEmail()}</span>
                </a> </h5>
            <h5>School : <span id="item-office-number">${intern.school}</span></h5>

        </div>
    </div>
</article>

    `;
};
function teamdiv (employee){
    switch(employee.getRole()){
        case "Manager": return managerdiv(employee);
        case "Engineer": return engineerdiv(employee);
        case "Intern": return interndiv(employee);
        default: return "";
    }

}

function site(data){
    let template = ``
    data.forEach(datum =>{
        template += teamdiv(datum)
    })
    return template
};


//Generates  HTML Template:
const generateHTML = (data) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    
        <link rel="stylesheet" href="./style.css" />
    
    </head>
    
    <div id="container">
        <header>
            <div id="header">
    
                <div>
    
                </div>
                <div class="info">
                    <h2>My Team</h2>
                </div>
            </div>
        </header>
    
        <body>
            <div id="body">
                <div class="col-6 col-s-9">
                    
                    <div class="flex-container">
                    ${site(data)}
                    </div>
                </div>
        </body>
        <footer>
            <div id="footer">
                <h2> &copy; Made by Manoj Adikari</h2>
    
            </div>
        </footer>
    </div>
    
    
    
    </html>
`
};

//-----------Exports ALL the HTML Functions
module.exports = {generateHTML};