// Faça um programa para calcular o valor de uma viagem.
//
// Você terá 3 variáveis, sendo elas:
// 1 - Preço do etanol;
// 2 - Preço da gasolina;
// 3 - O tipo de combustível que está no carro;
// 4 - Gasto médio de combustível do carro por km;
// 5 - Distância em km da viagem;
//
// Imprima no console o valor que será gasto para realizar esta viagem.

const etanol = 4.69;  // Em reais.
const gasolina = 6.70;  // Em reais.
let tipoCombustivelAtual = "etanol";  // Tipo de combustivel presente no carro.
const consumoEtanol = 9.0; // Litros consumido por KM.
const consumoGasolina = 12.0;  // Litros consumido por KM.
const distancia = 550; // Distancia da viagem em KM.

let litrosGasolina = (distancia / consumoGasolina);
let litrosEtanol = (distancia / consumoEtanol);

if(tipoCombustivelAtual === "gasolina"){
       
let valorRealGasolina = (litrosGasolina * gasolina);
console.log(`O valor gasto para fazer uma viagem de ${distancia}Km com ${tipoCombustivelAtual} é de R$${valorRealGasolina.toFixed(2)}.`)

} else if (tipoCombustivelAtual === "etanol"){

    let valorRealEtanol = (litrosEtanol * etanol);
console.log(`O valor gasto para fazer uma viagem de ${distancia}Km com ${tipoCombustivelAtual} é de R$${valorRealEtanol.toFixed(2)}.`)

}else{

    console.log("Combustivel não cadastrado!");
    
}