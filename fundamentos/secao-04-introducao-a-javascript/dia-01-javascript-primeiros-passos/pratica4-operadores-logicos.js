// Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
// Crie uma variável chamada “message” que, inicialmente, é uma string vazia.
// Implemente condicionais para que:
  // Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.
  // Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.
  // Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.
  // Se o horário estiver entre 11 e 14, insira “Hora do almoço!!!” na variável “message”.
  // Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.
// Agora imprima a variável message fora das suas condições.

const currentHour = 12;
let message = '';

if (currentHour >= 22) {
	message = 'Não deveríamos	comer nada, é hora de dormir';
} else if (currentHour < 22 && curretHour >= 18) {
	message = 'Rango	da noite, vamos jantar :D';
} else if (currentHour < 18 && curretHour >= 14) {
	message = 'Vamos	fazer um bolo pro café da tarde?';
} else if (currentHour < 14 && curretHour >= 11) {
	message = 'Hora do almoço!!!';
} else if (currentHour < 11 && curretHour >= 4) {
	message = 'Hmmm, cheiro de café	recém-passado';
} else {
	message = 'Não é hora de comer.'
}

// console.log(message);

// ====================================================================

// Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.
// Utilizando if/else, implemente condicionais para que:
	// Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.
	// Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.

