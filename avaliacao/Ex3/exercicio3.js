const { salario, print, gets } = require("./funcaoexc3");



const salariobruto = gets();
const beneficios = gets();


if (salariobruto > 0 && salariobruto <= 1100) {

    print("R$ " + salario(salariobruto, beneficios, 5));

} else if (salariobruto > 1100 && salariobruto <= 2500) {

    print("R$ " + salario(salariobruto, beneficios, 10));

} else if (salariobruto > 2500) {

    print("R$ " + salario(salariobruto, beneficios, 15));

} else {

    print("Digite o salário.");

}