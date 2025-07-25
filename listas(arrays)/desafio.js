//Crie um programa que dado o número, imprime sua tabuada.

// Cria um array com os números de 0 a 10 para a tabuada
// const tabuada = [0,1,2,3,4,5,6,7,8,9,10];
// Define o número para o qual será gerada a tabuada
// let num = 2;

// Função que imprime a tabuada do número passado como parâmetro
// function multiplicacao(num){
//     // Percorre o array da tabuada
//     for(let i = 0; i < tabuada.length; i++){
//         // Calcula o resultado da multiplicação
//         let resultado = num * tabuada[i];
//         // Imprime o resultado no formato "num x tabuada[i] = resultado"
//         console.log(`${num}x${tabuada[i]}=${resultado}`);
//     }
// }

// Chama a função para imprimir a tabuada do número definido
// multiplicacao(num);

//Crie um programa que seja capaz de percorrer uma lista de números e imprima cada número Par encontrado.

const numeros = [0,1,2,3,4,5,6,7,8,9,10];

for(let i = 0; i < numeros.length; i++){
    
    if(numeros[i] % 2 == 0)
        console.log(`${numeros[i]}`);
}