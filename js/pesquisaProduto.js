var botao = document.getElementById("searchProduct");
botao.addEventListener("click", function(event){
	event.preventDefault();
	console.log("fui clicado");
	var xhr= new XMLHttpRequest();
	xhr.open("GET",""); /*link aqui */

	xhr.addEventListener("load",function(){
		var retorno=xhr.responseText;
		var produtos = JSON.parse(retorno);	

		criaElementosTabela(produtos);
	})

});
var botao = document.getElementById("return");
botao.addEventListener("click", function(event){
	event.preventDefault();
	location.href="productRegister.html";
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
