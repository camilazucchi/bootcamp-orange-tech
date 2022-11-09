/* 
neste desafio, você terá que criar uma função que faça um número como argumento e retorne "Fizz", "Buzz" ou "FizzBuzz". 
você receberá um número onde: 
    se o número for um múltiplo de 3 e 5 -> "FizzBuzz" ; 
    se o número for apenas múltiplo de 3 -> "Fizz" ; 
    se o número for apenas múltiplo de 5 -> "Buzz"; 
    se o número não for um múltiplo de 3 ou 5, o número deve ser exibido; */

    
let resultado = gets();

    if (resultado % 15 === 0) {
      console.log("FizzBuzz");
    } else if (resultado % 3 === 0) {
      console.log("Fizz");
    } else if (resultado % 5 === 0) {
      console.log("Buzz");
    } else console.log(resultado);