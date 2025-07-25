let notas = [];
let soma = 0;


notas.push(10);
notas.push(6);
notas.push(6);

for(let i = 0; i < notas.length;i++){
    const nota = notas[i];
    soma = soma + nota;

}

let media = soma / notas.length;
console.log(media.toFixed(1));
