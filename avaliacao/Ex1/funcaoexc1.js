let nota;


function gets(nota){

   if(nota >= 7){

    console.log(`Parabéns, sua nota foi ${nota.toFixed(1)}, você foi APROVADO.`);

   }else if(nota >= 5 && nota < 7){

    console.log(`Sua nota foi ${nota.toFixed(1)}, você está de RECUPERAÇÃO.`);

   }else{

    console.log(`Sua nota foi ${nota.toFixed(1)}, você está de RECUPERAÇÃO.`);

   }

}
     

module.exports = {gets};