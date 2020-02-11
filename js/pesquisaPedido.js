var botaoSearch = document.getElementById("searchOrder");
botaoSearch.addEventListener("click", function(event){
	event.preventDefault();
	
	var xhr= new XMLHttpRequest();
	xhr.open("GET",""); /*link aqui */

	xhr.addEventListener("load",function(){
		var retorno=xhr.responseText;
		var clientes = JSON.parse(retorno);	
		criaElementosTabela(pedidos);
	})
});


var botaoReturn = document.getElementById("Return");
botaoReturn.addEventListener("click", function(event){
	event.preventDefault();
	location.href = "order.html";
});

function criaElementosTabela(produtos){
	produtos.forEach(function(){
		var produtoTr = document.createElement("tr");
		var produtoIdTd= document.createElement("td");
		var nomeTd= document.createElement("td");
		var ingredientesTd= document.createElement("td");
		var precoTd= document.createElement("td");
		var tabela = document.querySelector(".tabela");

		produtoIdTd.textContent = produto.Id;
		nomeTd.textContent = produto.Name;
		ingredientesTd.textContent = produto.telephone;
		precoTd.textContent = produto.address;

		produtoTr.appendChild(produtoIdTd);
		produtoTr.appendChild(nomeTd);
		produtoTr.appendChild(ingredientesTd);
		produtoTr.appendChild(precoTd);
		tabela.appendChild(produtoTr);
	});
}