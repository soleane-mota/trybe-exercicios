// - Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, `a` e `b`, definidas no começo com os valores que serão operados. Faça programas para:
//   - Adição (a + b)
//   - Subtração (a - b)
//   - Multiplicação (a * b)
//   - Divisão (a / b)
//   - Módulo (a % b)

const a = 10;
const b = 2;
const c = 20;

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

if (a > b && a > c) {
	console.log(`O número ${a} é maior que ${b} e ${c}.`);
} else if (b > a && b > c) {
	console.log(`O número ${b} é maior que ${a} e ${c}.`);
} else if (c > a && c > b) {
	console.log(`O número ${c} é maior que ${a} e ${b}.`);
} else {
	console.log(`O número são iguais.`);
}

// - Utilize `if/else` para fazer um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.

function wholeNumber(num) {
	if (Math.round(num) >= 0) {
		return 'positivo';
	} else {
		return 'negativo';
	}
}
console.log(wholeNumber(-0.9));

// - Utilize `if/else` para fazer um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne `true` se os ângulos representarem os ângulos de um triângulo e `false`, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.

function triangle() {

	const a = 180;
	const b = 90;
	const c = -1;
	
	if ((a + b + c) == 180) {
		return true;
	} else if (typeof(a) !== 'number'  || typeof(b) !== 'number' || typeof(c) !== 'number') {
		return 'Erro! Valor inválido';
	} else if (Math.round(a) < 0 || Math.round(b) || Math.round(c)) {
		return 'Erro! Valor inválido';
	}
		return false;
}
console.log(triangle());

// Utilize switch/case para fazer um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
	// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
	// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
	// Exemplo: bishop (bispo) -> diagonals (diagonais)
let pecaXadrez = 'torre';
let movimento = '';

switch (toLowerCase(pecaXadrez)) {
	case 'rei':
		movimento = 'horizontal, vertical e diagonal, sendo uma casa por vez';
		break;
	case 'rainha':
		movimento = 'horizontal, vertical e diagonais mas não pode pular outras peças';
		break;
	case 'bispo':
		movimento = 'diagonal. Não pode pular outras peças.';
		break;
	case 'cavalo':
		movimento = 'em forma de “L”, duas casas em sentido horizontal e mais uma na vertical ou vice-versa';
		break;
	case 'torre':
		movimento = 'vertical ou horizontal, mas não pode pular outras peças';
		break;
	case 'peão':
		movimento = 'uma casa para frente (duas casas se for o primeiro movimento) e somente captura outras peças na diagonal';
		break;
	default:
		movimento = 'Erro! Peça inválida.';
}

console.log(movimento);

// Utilize if/else para fazer um programa que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A

// Porcentagem >= 80 -> B

// Porcentagem >= 70 -> C

// Porcentagem >= 60 -> D

// Porcentagem >= 50 -> E

// Porcentagem < 50 -> F

// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.