function generateManagerCard(manager){

    let name = manager.getName();
    let role = manager.getRole();
    let id = manager.getId();
    let email = manager.getEmail();
    let officeNum = manager.getOffice();

    const card = `<div class="card py-4 shadow-lg" style="width: 18rem;">
        <div class="card-header">
          <h5 class="card-title">${name}</h5>
          <h5 class="card-title">${role}</h5>
        </div>
        <ul class="list-group">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email: <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">Office Number: ${officeNum}</li>
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

        const card = `<div class="card py-4 shadow-lg" style="width: 18rem;">
        <div class="card-header">
          <h5 class="card-title">${name}</h5>
          <h5 class="card-title">${role}</h5>
        </div>
        <ul class="list-group">
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

        const card = `<div class="card py-4 shadow-lg" style="width: 18rem;">
        <div class="card-header">
          <h5 class="card-title">${name}</h5>
          <h5 class="card-title">${role}</h5>
        </div>
        <ul class="list-group">
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
    <link rel="stylesheet" href="./styles.css">
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
    ${engineerCards.map(card => {return card}).join("")}
    ${internCards.map(card => {return card}).join("")}
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="../index.js" defer='defer'></script>
</body>
</html>
`;
};

module.exports = {generateManagerCard, generateInternCards, generateEngineerCards, generatePage};
