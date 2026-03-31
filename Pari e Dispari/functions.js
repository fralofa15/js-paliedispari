function numeroRandom() {
    return Math.floor(Math.random() * 5 +1);
}

function verificaPariDispari(valore1, valore2) {
    const valoreFinale = valore1 + valore2;
    if(valoreFinale % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
}