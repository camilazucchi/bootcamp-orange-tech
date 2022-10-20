/*
faça um programa para calcular o valor de uma viagem.

você terá cinco variáveis, sendo elas:
    1 - preço do etanol;
    2 - preço da gasolina;
    3 - o tipo de combustível que está no seu carro;
    4 - o gasto médio de combustível do carro por km;
    5 - distância em km da viagem.

imprima no console o valor que será  gasto para realizar esta viagem.
*/

const precoEtanol = 3.4;
const precoGasolina = 4.86;
const gastoMedioPorKm = 12;
const distanciaEmKm = 180.4;
const isEtanol = false;

if (isEtanol === true) {
  const litrosConsumidos = distanciaEmKm / gastoMedioPorKm;
  const valorGasto = litrosConsumidos * precoEtanol;
  console.log(
    `você gastará: R\$${valorGasto.toFixed(2)} em combustível do tipo etanol. boa viagem!`
  );
} else {
  const litrosConsumidos = distanciaEmKm / gastoMedioPorKm;
  const valorGasto = litrosConsumidos * precoGasolina;
  console.log(
    `você gastará: R\$${valorGasto.toFixed(2)} em combustível do tipo gasolina. boa viagem!`
  );
}