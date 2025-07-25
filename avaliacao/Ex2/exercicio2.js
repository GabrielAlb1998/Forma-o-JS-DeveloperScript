
/*
    Faça um programa que receba N (quantidade de números) e seus respectivos valores.
    Imprima o maior valor número par e o menor númerp impar.

    Exemplo:

    entrada:
    5
    3
    4
    1
    10
    8

    saída:

     maior número par: 10
     menor número impar: 1
*/
const { gets, escrever, nArrays } = require('./funcaoexc2');
const numrs = [];
const n = nArrays();


for (let i = 0; i < n; i++) {
    numrs.push(gets());        
}

const maiorPar = Math.max(...numrs.filter(num => num % 2 === 0));
const menorImpar = Math.min(...numrs.filter(num => num % 2 !== 0));   

    

escrever(`O maior número Par é ${maiorPar} e o menor número Impar é ${menorImpar}`);


