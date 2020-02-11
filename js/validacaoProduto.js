var botaoProduto = document.getElementById("registerProduct")
botaoProduto.addEventListener("click", function(event){
	event.preventDefault();
	validaProduto();
});

var botaoClear = document.getElementById("clear");
botaoClear.addEventListener("click", function(event){
	event.preventDefault();
	var nomeProduto = document.getElementById("inputName");
	var ingredientes = document.getElementById("inputIngredients");
	var preco = document.getElementById("inputPrice");
	nomeProduto.value = "";
    ingredientes.value = "";
    preco.value = "";
    alert("Campos Limpos");
});

function validaProduto(){
	var nomeProduto = document.getElementById("inputName");
	var ingredientes = document.getElementById("inputIngredients");
	var preco = document.getElementById("inputPrice");
	
	if(nomeProduto.value==""){
		alert("Preencha o campo Nome");
		return false;
	}
	if(ingredientes.value==""){
		alert("Preencha o campo Ingredientes");
		return false;
	}
	precoFloat= (parseFloat(preco.value));
    if (isNaN(precoFloat)) {
        alert("Preencha o campo Preço corretamente");
        return false;
    }
    alert("OK");
    nomeProduto.value = "";
    ingredientes.value = "";
    preco.value = "";
    return true;
}