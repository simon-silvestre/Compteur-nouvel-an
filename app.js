let titre               = document.querySelector('h1');
const jours             = document.getElementById('jours');
const heures            = document.getElementById('heures');
const minutes           = document.getElementById('minutes');
let dateActuelle        = new Date();
const anneeProchaine    = new Date('2021', '00', '01', '00', '00', '00').getTime();

function tempsRestant() {
    var tempsRestant = (anneeProchaine - dateActuelle) / 1000;

    if (tempsRestant == 0 || tempsRestant < 0) {
        clearInterval();
        titre.textContent = "L'attente est finie"
    }

    if (tempsRestant > 0) {
        var joursRestant = Math.floor(tempsRestant / 86400);
        var heuresRestant = Math.floor((tempsRestant - (joursRestant * 86400 )) / 3600);
        var minutesRestant = Math.floor((tempsRestant - ((joursRestant * 86400 + heuresRestant * 3600))) / 60); 
    }

    jours.textContent = joursRestant;
    heures.textContent = heuresRestant;
    minutes.textContent = minutesRestant;
}

setInterval("tempsRestant()", "1000");