const maxpoints = document.querySelector("#maxpoints");
const pointsgoal = document.querySelector("#pointsgoal");

function numberOfFight() {
    
    const pointGoal = document.getElementById("pointGoal").value;
    const playerPoints = document.getElementById("playerPoints").value;
    const fightPoints = document.getElementById("fightPoints").value;
    
    const fight = (pointGoal - playerPoints) / fightPoints;
    let safeFight = Math.ceil(fight)
    const division = document.createElement("p");
    division.id = "pointsgoal"; division.classList.add("divisionContaint");
    document.getElementById("resultat").appendChild(division);
    division.innerHTML = `Nombre de Combats à Faire : ${safeFight}`;
}

function maxPoints() {

    const life = document.getElementById("numberOfLife").value;
    const fightPoints = document.getElementById("fightPoints").value;

    const pointsMax = fightPoints * life;
    const division = document.createElement("p");
    division.id = "maxpoints"; division.classList.add("divisionContaint");
    document.getElementById("resultat").appendChild(division);
    division.innerHTML = `Nombre de combats possible : ${pointsMax}`;
}

function result() {
    document.getElementById("resultat").innerHTML = "";
    numberOfFight();
    maxPoints();
}

function reset() {
    document.getElementById("resultat").innerHTML = "";
    document.getElementById("pointGoal").value = 1;
    document.getElementById("playerPoints").value = 1;
    document.getElementById("fightPoints").value = 1;
    document.getElementById("numberOfLife").value = 1;
    document.getElementById("fightPoints").value = 1;
}






