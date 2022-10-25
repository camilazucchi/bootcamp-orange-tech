/*
crie uma classe para representar pessoas.
para cada pessoa teremos os atributos:
    - nome;
    - peso;
    - altura;
as pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
instancie uma pessoa chamada José, que tenha 70kg de peso, 1.75 de altura e peça ao José
para dizer o valor do seu IMC.

IMC em adultos:
    - abaixo de 18.5 (abaixo do peso);
    - entre 18.5 e 25 (peso normal);
    - entre 25 e 30 (acima do peso);
    - entre 30 e 40 (obeso);
    - acima de 40 (obesidade grave);
*/

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;

    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    classificarIMC() {
        const IMC = this.calcularIMC();
        if (IMC < 18.5) {
            return(`${this.nome}, seu IMC é de ${this.calcularIMC().toFixed(2)}, você está abaixo do peso.`);
        } else if (IMC >= 18.5 && IMC < 25) {
            return(`${this.nome}, seu IMC é de ${this.calcularIMC().toFixed(2)}, você está com o peso normal.`);
        } else if (this.IMC >= 25 && IMC < 30) {
            return(`${this.nome}, seu IMC é de ${this.calcularIMC().toFixed(2)}, você está acima do peso.`);
        } else if (IMC >= 30 && IMC <= 40) {
            return(`${this.nome}, seu IMC é de ${this.calcularIMC().toFixed(2)}, você está com obesidade.`);
        } else {
            return(`${this.nome}, seu IMC é de ${this.calcularIMC().toFixed(2)}, você está com obesidade grave.`);
        }
    }
}

const pessoa1 = new Pessoa('José', 70, 1.75);
console.log(pessoa1.classificarIMC());