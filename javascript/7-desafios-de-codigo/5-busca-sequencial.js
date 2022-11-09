/* 
uma busca sequencial se caracteriza por percorrermos todos os  elementos de uma estrutura em busca do elemento “X” desejado.
neste desafio, dada uma estrutura de vetor A [a1, a2...an], percorra todo o vetor fazendo as comparações de A[N] = X.
caso a condição seja verdadeira, “X” existe na estrutura e a busca será concluída com sucesso. 
considere um array de 10 elementos do tipo inteiro: 
os elementos são {64, 137, -16, 43, 67, 81, -90, 212, 10, 75}. 
    carregue esses elementos em um array.  
    implementação da busca sequencial: 
    crie um método  que realiza uma busca sequencial.  
se o valor constar no array, retorne um texto contendo o valor e sua respectiva posição no array.
caso contrário, retorne um texto dizendo que o número não foi encontrado.
*/

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let valor = parseInt(gets());

let encontrado = elementos.find(elemento => elemento === valor);

if (encontrado !== undefined){
  let index = elementos.indexOf(encontrado)
  print(`Achei ${encontrado} na posicao ${index}`)
} else {
  print(`Numero ${valor} nao encontrado!`)
}