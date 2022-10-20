/* faça um programa para calcular o valor de uma viagem.
você terá três variáveis, sendo elas:
    - 1: preço do combustível;
    - 2: gasto médio do combustível do carro por km;
    - 3: distância em km da viagem.

imprima no console o valor que será gasto de combustível para realizar esta viagem. */

// preço do combustível (gasolina):
const precoCombustivel = 4.86;
// gasto médio do carro = 12km/l:
let kmPorLitros = 12;
//distância da viagem (de florianópolis até joinville) = 180.4km:
let distanciaEmKm = 180.4;

const litrosConsumidos = precoCombustivel / kmPorLitros;
const valorGasto = litrosConsumidos * distanciaEmKm;

console.log("o valor que você irá gastar de combustível na sua viagem é de: " + "R$" + valorGasto.toFixed(2));