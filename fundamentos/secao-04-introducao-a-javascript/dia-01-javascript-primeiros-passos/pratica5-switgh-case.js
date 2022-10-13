// Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
// Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
	// Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
	// Caso 'lista', imprima “Você está na nossa lista de espera”.
	// Caso 'reprovada', imprima “Você foi reprovada(o)”.
	// Caso default, imprima a mensagem de “Informação incorreta”.

	const status = 'reprovada';

	switch (status) {
		case 'aprovada':
			console.log('Parabéns, você foi aprovada(o)!');
			break;
		case 'lista':
			console.log('Você está na nossa lista de espera');
			break;
		case 'reprovada':
			console.log('Você foi reprovada(o)');
			break;
		default:
			console.log('Informação incorreta');
	}