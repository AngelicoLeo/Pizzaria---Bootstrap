var botaoPedido = document.getElementById("registerOrder");
botaoPedido.addEventListener("click", function(event){
	event.preventDefault();
	validaPedido();
});
var botaoLimpar = document.getElementById("clearRegister");
botaoLimpar.addEventListener("click", function(event){
	event.preventDefault();
	limpaPedido();
});

function validaPedido(){
	var data =document.getElementById("inputDate");
	var cliente = document.getElementById("inputClient");
	var dataTipada= new Date (data);
	
	if(dataTipada.toDateString() < new Date().toDateString()){
		alert("Preencher com uma Data Correta");
		return false;
	}
	if(cliente.value==""){
		alert("Preencha o campo Cliente");
		return false;
	}
	alert("OK");
	cliente.value="";
	data.value ="";

	return true;
}

function limpaPedido(){
	var id = document.getElementById("inputOrderId");
	var cliente = document.getElementById("inputClient");
	var product = document.getElementById("inputProduct");
	var date = document.getElementById("inputDate");
	id.value="";
    cliente.value = "";
    product.value = "";
    date.value = "";
    alert("Campos Limpos");
}