const { gets, print } = require('./aula1');
const numSorteados = [];




for(let i = 0;i < 5;i++){
    numSorteados.push(gets());      
}

const maiorNum = Math.max(...numSorteados); 

print(maiorNum);


/*

Uma sala contem 5 alunos e para cada 5 alunos foi sorteado um numero de 1 - 100.
Faça um programa que receba os 5 numeros sorteados para os alunos e mostre o maior numero sorteado.

Dados de entrada:
5
50
10
98
23

Saida:
98
*/




