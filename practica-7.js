//indica si un número 'n' es primo
function esPrimo(n) {
    var primo = true;
    for(i = 2; i < n; i++) {
        if (n % i === 0) {
            primo = false;
        }
    }
    return primo;
}

//indica todos los primos entre 1 y 'n'
function nPrimos(n) {
    var primos = []
    for (i = 1; i <= n; i++) {
        esPrimo(i) ? primos.push(i) : null;
    }
    return primos;
}

//devuelve los primeros 'n' numeros primos
function primerosnPrimos(n) {
    var primos = []
    var i = 2
    while (primos.length < n) {
        esPrimo(i) ? primos.push(i) : null;
        i++;
    }
    return primos;
}