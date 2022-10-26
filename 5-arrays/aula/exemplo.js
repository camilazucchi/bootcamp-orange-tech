const notas = [];

notas.push(10);
notas.push(2);
notas.push(3.5);
notas.push(6);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media.toFixed(2));