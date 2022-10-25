/* 
o IMC - Índice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação
sobre a condição de peso de uma pessoa adulta.

fórmula do IMC:
IMC = peso / (altura * altura);

elabore um algoritmo que dado o peso e a altura de um adulto, mostre sua condição de acordo com
a table abaixo:

IMC em adultos:
    - abaixo de 18.5 (abaixo do peso);
    - entre 18.5 e 25 (peso normal);
    - entre 25 e 30 (acima do peso);
    - entre 30 e 40 (obeso);
    - acima de 40 (obesidade grave);
*/

const altura = 1.9;
const peso = 64;

const formulaIMC = peso / Math.pow(altura, 2);

if (formulaIMC < 18.5) {
  console.log(
    `o seu IMC é de: ${formulaIMC.toFixed(2)}. você está abaixo do peso. `
  );
} else if (formulaIMC >= 18.5 && formulaIMC < 25) {
  console.log(
    `o seu IMC é de: ${formulaIMC.toFixed(2)}. você está com o peso normal. `
  );
} else if (formulaIMC >= 25 && formulaIMC < 30) {
  console.log(
    `o seu IMC é de: ${formulaIMC.toFixed(2)}. você está acima do peso. `
  );
} else if (formulaIMC >= 30 && formulaIMC <= 40) {
  console.log(
    `o seu IMC é de: ${formulaIMC.toFixed(2)}. você está com obesidade. `
  );
} else {
  console.log(
    `o seu IMC é de: ${formulaIMC.toFixed(2)}. você está com obesidade grave. `
  );
}