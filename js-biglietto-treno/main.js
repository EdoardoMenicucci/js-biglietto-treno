
const prezzoAlKm = 0.21;

const nome = prompt("Inserisci il tuo nome")

const lunghezzaPercorso = prompt("Inserisci la lunghezza del percorso in kilometri")

const etaPasseggiero = prompt("Inserisci la tua eta")

let maggiorenne = prezzoAlKm * lunghezzaPercorso;
let maggio = maggiorenne.toFixed(2);

let minorenne = prezzoAlKm * lunghezzaPercorso / 100 * 80;
let mino = minorenne.toFixed(2);

let anziano = prezzoAlKm * lunghezzaPercorso / 100 * 60;
let anzi = anziano.toFixed(2);

if (etaPasseggiero < 18 && etaPasseggiero > 0) {
    alert(mino + "€")
    document.getElementById("tuoprezzo").innerHTML = nome + " " + "Il tuo prezzo sarà: " + mino + "€";
} else if (etaPasseggiero > 61 && etaPasseggiero < 120) {
    alert(anzi + "€")
    document.getElementById("tuoprezzo").innerHTML = nome + " " + "Il tuo prezzo sarà: " + anzi + "€";
} else if (etaPasseggiero > 18 && etaPasseggiero < 61) {
    alert(maggio + "€")
    document.getElementById("tuoprezzo").innerHTML = nome + " " + "Il tuo prezzo sarà: " + maggio + "€";
} else if (etaPasseggiero < 0 || etaPasseggiero > 120) {
    alert("Errore, impossibile")
    document.getElementById("tuoprezzo").innerHTML = "Inserisci la tua vera eta!";
}



