/* 
crie uma classe para representar carros.
os carros possuem uma marca, uma cor e um gasto médio de combustível por
km rodados.
crie um método que dado à quantidade  de km e o preço do combustível nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoMedioPorKm(precoCombustivel, distanciaViagem) {
        return distanciaViagem / this.gastoMedioPorKm * precoCombustivel;
    }
}

const carro1 = new Carros('hb20', 'cinza', 12);
console.log(carro1);
console.log(carro1.calcularGastoMedioPorKm(70, 5).toFixed(2));