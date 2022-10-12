// - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, `a` e `b`, definidas no começo com os valores que serão operados. Faça programas para:
//   - Adição (a + b)
//   - Subtração (a - b)
//   - Multiplicação (a * b)
//   - Divisão (a / b)
//   - Módulo (a % b)

const a = 10;
const b = 2;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// - Utilize `if/else` para fazer um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.

if (a > b) {
	console.log(`O número ${a} é maior que ${b}.`);
} else if (a < b) {
	console.log(`O número ${b} é maior que ${a}.`);
} else {
	console.log(`O número ${a} é igual a ${b}.`);
}

// - Utilize `if/else` para fazer um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.


// - Utilize `if/else` para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
// - Utilize `if/else` para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne `true` se os ângulos representarem os ângulos de um triângulo e `false`, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.