
const form = document.getElementById('form');

form.addEventListener('submit',(e) =>{
	e.preventDefault();
	let nome = document.getElementById('nome').value;
	let email = document.getElementById('email').value;
	let cpf = document.getElementById('cpf').value;
	let dataNasc = document.getElementById('dataNasc').value;
	let endereco = document.getElementById('endereco').value;
	let numero = document.getElementById('numero').value;
	let complemento = document.getElementById('complemento').value;
	let bairro = document.getElementById('bairro').value;
	let cidade = document.getElementById('cidade').value;
	let livro = document.getElementById('livros').value;
	let qtd = document.getElementById('quantidade').value;
	let sim = document.getElementById('sim').value;
	let nao = document.getElementById('nao').value;
	
	let data = {
		nome,
		email,
		cpf,
		dataNasc,
		endereco,
		numero,
		complemento,
		bairro,
		cidade,
		livro,
		qtd,
		sim,
		nao,
	}
	
	let convertData = JSON.stringify(data);
	
	localStorage.setItem('lead',convertData);
	
	let content = document.getElementById('dados');
	
	let finalizando = `<p>Finalizando a compra...</p>`
	
	let fim = `<p>Compra Realizada com Sucesso!</p>`
	
	content.innerHTML = finalizando;
	
	setTimeout(() => {
		content.innerHTML = fim;
	}, 1000);
	
	
	
})