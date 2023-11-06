function extractCurrencyValue(cadena) {
    return Number(cadena.replace("$",""));
}

alert(extractCurrencyValue("$120"));