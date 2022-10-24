// funções que não devolvem nada são chamadas de procedimentos!
// uma função é um pequeno trecho de código que conseguimos invocar para ser executado várias vezes, o tornando dinâmico passando parâmetros e retornos;

// orientando o exercício 2, feito anteriormente, com o uso de funções:

function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return (
          `o seu IMC é de: ${imc.toFixed(2)}. você está abaixo do peso. `
        );
      } else if (imc >= 18.5 && imc < 25) {
        return (
          `o seu IMC é de: ${imc.toFixed(2)}. você está com o peso normal. `
        );
      } else if (imc >= 25 && imc < 30) {
        return (
          `o seu IMC é de: ${imc.toFixed(2)}. você está acima do peso. `
        );
      } else if (imc >= 30 && imc <= 40) {
        return (
          `o seu IMC é de: ${imc.toFixed(2)}. você está com obesidade. `
        );
      } else {
        return (
          `o seu IMC é de: ${imc.toFixed(2)}. você está com obesidade grave. `
        );
      }
}

function main() {
    const altura = 1.9;
    const peso = 64;

    const imc = calcularIMC(peso, altura);
    console.log(classificarIMC(imc));
}

main();