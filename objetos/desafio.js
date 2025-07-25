// Desafio 1

class carro {

    marca;
    cor;
    consumoPorKm;

   constructor(marca,cor,consumoPorKm){
       this.marca = marca;
       this.cor = cor;
       this.consumoPorKm = consumoPorKm;
 };
   
   valorGasto(distancia,precoCombustivel)// calculo de litros necessarios
  {
          
          let LitrosGasto = distancia/this.consumoPorKm;// calculo de litros necessarios
          let PreçoViagem = precoCombustivel * LitrosGasto;// calculo de preço dos litros necessarios

           console.log(`O ${this.marca} faz uma media de ${this.consumoPorKm}km's por litro, para\n percorrer ${distancia}Km's, precisa de ${LitrosGasto.toFixed(2)}L dando um total de R$${PreçoViagem.toFixed(2)}.`); 
  };   


}


const hb20 = new carro ("hyundai","Preto",12.3);
const gol = new carro ("Volkwagem","Azul",10.0);

hb20.valorGasto(250,6.79);
gol.valorGasto(250,6.79);

//------------------------------------------------------------------------------------------------------------------------------------
// Desafio 2

class pessoa{
      
      nome;
      peso;
      altura;
      ICM;
     

    constructor(nome,peso,altura){

        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }  
   
    calcularIMC(){

        return this.peso / (this.altura * this.altura);

    }
    classificarIMC(){
        const imc = this.calcularIMC();

        if(imc < 18.5){
            return(`${this.nome},você está com o peso baixo.`);
        }else if(imc >= 18.5 && imc <= 24.9){
            return(`${this.nome},você está com o peso normal ou saudável.`);
        }else if(imc >= 25 && imc <= 29.9){
            return(`${this.nome},você está com o sobrepeso.`);
        }else if(imc >= 30 && imc <= 34.9){
            return(`${this.nome},você está com o Obesidade grau 1.`);
        }else if(imc >= 35 && imc <= 39.9){
            return(`${this.nome},você está com o Obesidade grau 2.`);
        }else{
            return(`${this.nome},você está com o Obesidade grau 3 (Obesidade mórbida).`);
        }
    }

}

const jose = new pessoa("José",70,1.79);

console.log(jose.calcularIMC());

const carlos = new pessoa("Carlos",99,1.79);

console.log(carlos.calcularIMC());







