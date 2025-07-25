// Define uma constante 'numero' com valor 2
// const numero = 2;

// Verifica se o número é par (resto da divisão por 2 igual a 0)
// const numeroPar = (numero % 2) === 0;

// Estrutura condicional para exibir se o número é par ou ímpar
// if (numeroPar) {
//     console.log("O número " + numero + " é par.");
// } else {
//     console.log("O número " + numero + " é ímpar.");
// }


const numero = 15;

const numeroDividido = (numero % 3) === 0;

// Estrutura condicional para exibir se o número é divisível por 3
if (numero === 0) {
    console.log("O número é zero, não é divisível por 3.");
} else if (numeroDividido) {
    console.log("O número " + numero + " é divisível por 3.");
} else {
    console.log("O número " + numero + " não é divisível por 3.");
}