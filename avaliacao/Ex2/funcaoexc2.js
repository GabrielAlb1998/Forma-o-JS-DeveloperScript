let numeros = [5, 3, 1, 4, 10, 8];
let i = 0;

function nArrays() {

    return numeros.length;

}
function gets() {

    const valor = numeros[i];
    i++;
    return valor;

}

function escrever(texto) {

    console.log(texto);
}

module.exports = { gets, escrever, nArrays };

