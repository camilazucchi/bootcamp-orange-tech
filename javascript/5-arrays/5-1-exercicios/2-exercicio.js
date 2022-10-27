/*
crie um programa que seja capaz de percorrer uma lista de números e imprima
cada número par encontrado;
*/

const numeros = [2, 5, 8, 11, 14];

for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2  === 0) {
        console.log(`os números pares são: ${numero}`);
    }
}
