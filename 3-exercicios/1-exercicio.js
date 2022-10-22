/*
faça um algoritmo que, dado três notas tiradas por um aluno em um semestre da faculdade
calcule e imprima a sua média e a sua classificação conforme a table abaixo:

média = ( nota 1 + nota 2 + nota 3) / 3;

classificação:
    - média menor que 5, reprovação;
    - média entre 5 e 7, recuperaçãao;
    - média acima de 7, passou de semestre.
*/

const nota1 = 1.0;
const nota2 = 3.0;
const nota3 = 9.0;

const mediaNotas = (nota1 + nota2 + nota3) / 3;

if (mediaNotas < 5) {
  console.log(
    `sua média é: ${mediaNotas.toFixed(1)}. você foi reprovado.`
  );
} else if (mediaNotas >= 5 && mediaNotas <= 7) {
  console.log(
    `sua média é: ${mediaNotas.toFixed(1)}. você está de recuperação.`
  );
} else {
  console.log(
    `sua média é: ${mediaNotas.toFixed(1)}. você está aprovado!`
  );
}