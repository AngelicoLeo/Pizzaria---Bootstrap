var botao = document.getElementById("searchClient");
botao.addEventListener("click", function(event){
	event.preventDefault();
	console.log("fui clicado");
	var xhr= new XMLHttpRequest();
	xhr.open("GET",""); /*link aqui */

	xhr.addEventListener("load",function(){
		var retorno=xhr.responseText;
		var clientes = JSON.parse(retorno);	

		criaElementosTabela(clientes);
	})

});
var botao = document.getElementById("return");
botao.addEventListener("click", function(event){
	event.preventDefault();
	console.log("fui clicado");
	location.href = "clientRegister.html";
});

function criaElementosTabela(clientes){
	clientes.forEach(function(){
		var clienteTr = document.createElement("tr");
		var clienteIdTd= document.createElement("td");
		var nomeTd= document.createElement("td");
		var telefoneTd= document.createElement("td");
		var enderecoTd= document.createElement("td");
		var tabela = document.querySelector(".tabela");

		clienteIdTd.textContent = cliente.Id;
		nomeTd.textContent = cliente.Name;
		telefoneTd.textContent = cliente.telephone;
		enderecoTd.textContent = cliente.address;

		clienteTr.appendChild(clienteIdTd);
		clienteTr.appendChild(nomeTd);
		clienteTr.appendChild(telefoneTd);
		clienteTr.appendChild(enderecoTd);
		tabela.appendChild(clienteTr);
	});
}
