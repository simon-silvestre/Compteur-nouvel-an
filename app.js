let titre               = document.querySelector("h1");
const jours             = document.getElementById("jours");
const heures            = document.getElementById("heures");
const minutes           = document.getElementById("minutes");
const secondes           = document.getElementById("secondes");

function tempsRestant() {

    let dateActuelle        = new Date();
    const anneeProchaine    = new Date("2021", "00", "01", "00", "00", "00").getTime();
    let tempsRestant        = (anneeProchaine - dateActuelle) / 1000;

    if (tempsRestant === 0 || tempsRestant < 0) {
        clearInterval(interval);
        titre.textContent = "L'attente est finie";
    }

    if (tempsRestant > 0) {
        let joursRestant    = Math.floor(tempsRestant / 86400);
        let heuresRestant   = Math.floor((tempsRestant - (joursRestant * 86400)) / 3600);
        let minutesRestant  = Math.floor((tempsRestant - (joursRestant * 86400 + heuresRestant * 3600)) / 60);
        let secondeRestant  = Math.floor(tempsRestant - (joursRestant * 86400 + heuresRestant * 3600 + minutesRestant * 60));

        jours.textContent    = joursRestant;
        heures.textContent   = heuresRestant;
        minutes.textContent  = minutesRestant;
        secondes.textContent = secondeRestant;
    }
}
tempsRestant();

setInterval(tempsRestant, 1000);