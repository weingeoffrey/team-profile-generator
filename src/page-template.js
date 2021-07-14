function generateManagerCard(manager){

    let name = manager.getName();
    let role = manager.getRole();
    let id = manager.getId();
    let email = manager.getEmail();
    let officeNum = manager.getOffice();

    const card = `<div class="card pb-1 shadow-lg mb-3" style="width: 18rem;">
        <div class="card-header bg-primary text-white">
          <h5 class="card-title">${name}</h5>
          <h5 class="card-title"><i class="bi bi-cup" style="padding-right: 0.5rem"></i>${role}</h5>
        </div>
        <ul class="list-group py-4">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item"></i>Email: <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item"></i>Office Number: ${officeNum}</li>
        </ul>
      </div>`

    return card;
}

function generateEngineerCards(engineerArray){
    let engineerCards = [];

    engineerArray.forEach(engineer => {
        let name = engineer.getName();
        let role = engineer.getRole();
        let id = engineer.getId();
        let email = engineer.getEmail();
        let github = engineer.getGithub();

        const card = `<div class="card pb-1 shadow-lg mb-3" style="width: 18rem;">
        <div class="card-header bg-success text-white">
          <h5 class="card-title">${name}</h5>
          <h5 class="card-title"><i class="bi bi-eyeglasses" style="padding-right: 0.5rem"></i>${role}</h5>
        </div>
        <ul class="list-group py-4">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://www.github.com/${github}" target="_blank">${github}</a></li>
        </ul>
      </div>`

      engineerCards.push(card);
    })
    return engineerCards;
}

function generateInternCards(internArray){
    let internCards = [];

    internArray.forEach(intern => {
        let name = intern.getName();
        let role = intern.getRole();
        let id = intern.getId();
        let email = intern.getEmail();
        let school = intern.getSchool();

        const card = `<div class="card pb-1 shadow-lg mb-3" style="width: 18rem;">
        <div class="card-header bg-info text-white">
          <h5 class="card-title">${name}</h5>
          <h5 class="card-title"><i class="bi bi-person-circle" style="padding-right: 0.5rem"></i>${role}</h5>
        </div>
        <ul class="list-group py-4">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">School: ${school}</li>
        </ul>
      </div>`

      internCards.push(card);
    })
    return internCards;
}

const generatePage = (managerCard, engineerCards, internCards) => {
return `
<!DOCTYPE html> 
<html lang="en"> 
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</head>
<body>
    <header>
        <div class="bg-dark text-secondary px-4 py-5 text-center">
            <div class="py-5">
                <h1 class="display-5 fw-bold text-white">My Team</h1>
            </div>
        </div>
    </header>
    <section id="card_container" class="container d-flex justify-content-around flex-wrap py-5">
    ${managerCard}
    ${(() => {
        if (engineerCards != "") {
            return engineerCards.map(card => (`${card}`)).join("")
        }
        else {
            return ""
        }
    })()}
    ${(() => {
        if (internCards != "") {
            return internCards.map(card => (`${card}`)).join("")
        }
        else {
            return ""
        }
    })()}
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>
</html>
`;
};

module.exports = {generateManagerCard, generateInternCards, generateEngineerCards, generatePage};
