
//Objeto dinamico (Posso adicionar ou deletar dados do objeto.)
const gabriel = {

    nome : 'Gabriel Albuquerque Nascimento De Oliveira',
    idade : 16,

    descrever: function(){// função assume o controle do objeto quando é colocada dentro do mesmo.
        
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos.`);//this é usando quando existe uma função dentro do objeto.
    }
}

console.log(gabriel.nome);
console.log(gabriel.idade);

//Adicionando dados ao objeto gabriel
gabriel.altura = 1.79;
//Deletando dados ao objeto gabriel
delete gabriel.nome;

//Classes-------------------------------------------------------------------------------------------------------------------------

class pessoa {//Class é a definição do objeto. (Ex: Quais informaçoes tem um documento de uma pessoa.)
    nome;
    idade;
    AnoDeNasc;

    constructor(nome, idade){//Obriga as Estancias a seguir um padraão de preencimento
             
        this.nome = nome;
        this.idade = idade;
        this.AnoDeNasc = 2025 - idade;
    }

    descrever() {//Dentro da class, a função já é identificada
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos.`);
    }
}

//Estancias da class pessoas (É a descrição do objeto respeitando a class.)

const gabriel = new pessoa()
gabriel.nome = "Gabriel";
gabriel.idade = 26;

const gabriel = new pessoa("gabriel",26); //Estancia da class pessoas usando *constructor*
