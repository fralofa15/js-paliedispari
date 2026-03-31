function palindromo(parola) {
    for (let i = 0; i < parola.length / 2; i++) {
        if (parola[i] !== parola[parola.length - 1 - i]) {
            return false;
        }
    }
    return true;
}