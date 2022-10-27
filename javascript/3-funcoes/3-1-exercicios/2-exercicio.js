/*
elabore um algoritmo  que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo adequado.

código condição de pagamento:
    1 - à vista no débito, recebe 10% de desconto;
    2 - à vista no dinheiro ou pix, recebe 15% de desconto;
    3 - em duas vezes, preço normal de etiqueta sem juros;
    4 - acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

function aplicarDesconto(valor, desconto) {
  return valor - valor * (desconto / 100);
}

function aplicarParcelamento(valor, numeroDeParcelas) {
  return valor / numeroDeParcelas;
}

function aplicarParcelamentoComJuros(valor, juros) {
  return valor + valor * (juros / 100);
}

if (formaDePagamento === 1) {
  console.log("você irá pagar: " + aplicarDesconto(precoEtiqueta, 10));
} else if (formaDePagamento === 2) {
  console.log("você irá pagar: " + aplicarDesconto(precoEtiqueta, 15));
} else if (formaDePagamento === 3) {
  console.log(
    "você irá pagar em duas vezes de: " + aplicarParcelamento(precoEtiqueta, 2)
  );
} else {
  console.log(
    "você irá pagar: " + aplicarParcelamentoComJuros(precoEtiqueta, 10)
  );
}

const precoEtiqueta = 100;
const formaDePagamento = 4;