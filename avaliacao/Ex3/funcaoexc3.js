/*
  Faça um programa que calcule e imprima o salario a ser transferido para um funcionario.

   Para realizar o calculo receba o valor bruto de salário e o adicional dos beneficios.
   O salário a ser transferido é calculado da seguinte maneira:

    Valor bruto do salário - percentual de imposto mediante a faixa salárial + adicional dos beneficios.

     Para calcular o percentual de imposto segue a aliquotas:

         De R% 0.00 a R$ 1100.00 = 5.00%
         De R% 1100.01 a R$ 2500.00 = 10.00%
         Maior que R$ 2500.00 = 15.00%

         Exemplo:
           
           Entrada:
               2000
               250

           Saida:
           
             2050
         
*/
const salarios = [2000,250];

let i = 0;


function gets(){

    const valor = salarios[i];
    i++;
    return valor;

}
function salario(salariobruto, extra, imposto) {

    const porcentagem = (salariobruto * imposto) / 100;
    const salarioLiquido = salariobruto - porcentagem + extra;
    return salarioLiquido.toFixed(2);

}


function print(texto) {

    console.log(texto);

}
module.exports = { salario, print, gets };