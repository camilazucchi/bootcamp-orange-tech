/*
neste desafio, receba um número inteiro N, calcule e imprima o somatório de todos os números de N até 0.   
*/

let n = parseInt(gets());

print(somatorio(n))

function somatorio(n){
  if (n > 0)
    return n + somatorio(n-1)
  else
    return 0
}