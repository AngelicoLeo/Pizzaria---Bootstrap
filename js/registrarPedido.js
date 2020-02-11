var botao = document.getElementById("searchOrderToList");
botao.addEventListener("click", function(event){
	event.preventDefault();
	location.href = "orderList.html";
});