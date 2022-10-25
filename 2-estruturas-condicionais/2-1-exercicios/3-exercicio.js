/*
elabore um algoritmo  que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
utilize os códigos da tabela a seguir para ler qual condição de pagamento escolhida e efetuar o cálculo adequado.

código condição de pagamento:
    1 - à vista no débito, recebe 10% de desconto;
    2 - à vista no dinheiro ou pix, recebe 15% de desconto;
    3 - em duas vezes, preço normal de etiqueta sem juros;
    4 - acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const precoEtiqueta = 100;
const formaDePagamento = 3;

if (formaDePagamento === 1) {
    const pagamentoDebito = precoEtiqueta * 0.1;
    console.log(`você irá pagar: R$${precoEtiqueta - pagamentoDebito}.`);
} else if (formaDePagamento === 2) {
    const pagamentoDinheiroPix = precoEtiqueta * 0.15;
    console.log(`você irá pagar: R$${precoEtiqueta - pagamentoDinheiroPix}.`);
} else if (formaDePagamento === 3) {
    const pagamentoDuasParcelas = precoEtiqueta / 2;
    console.log(`você irá pagar em duas vezes de: R$${pagamentoDuasParcelas}.`);
} else {
    const pagamentoMaisParcelas = precoEtiqueta + precoEtiqueta * 0.1;
    console.log(`você irá pagar em duas vezes de: R$${pagamentoMaisParcelas}.`);
}