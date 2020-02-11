var botao = document.getElementById("searchProductToList");
botao.addEventListener("click", function(event){
	event.preventDefault();
	
	location.href = "productList.html";
});