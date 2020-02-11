var botaoCliente = document.getElementById("registerClient");
botaoCliente.addEventListener("click", function(event){
	event.preventDefault();
	validaCliente();
});
var botaoLimpar = document.getElementById("clearClient");
botaoLimpar.addEventListener("click", function(event){
	event.preventDefault();
	limpaCliente();
});

function validaCliente(){
	
	var nome = document.getElementById("inputName");
	var telefone = document.getElementById("inputTelephone");
	var endereco = document.getElementById("inputAdress");
	var reDigits = /^[0-9][0-9]{9}[0-9]\b/;

	if(nome.value==""){
		alert("Preencha o campo Nome");
		return false;
	}
		
	if(telefone.value==""){	
		alert("Preencha o campo Telefone");
		return false;
	}
	
	if (!reDigits.test(telefone.value)){
		alert("O número: " + telefone.value + " é inválido!");
		return false;
	}
	if(endereco.value==""){
		alert("Preencha o campo Endereco");
		return false;
	}

	alert("OK");
    nome.value = "";
    telefone.value = "";
    endereco.value = "";
    
    return true;
}
function limpaCliente(){
	var id = document.getElementById("inputClientId");
	var nome = document.getElementById("inputName");
	var telefone = document.getElementById("inputTelephone");
	var endereco = document.getElementById("inputAdress");
	id.value="";
    nome.value = "";
    telefone.value = "";
    endereco.value = "";
    alert("Campos Limpos");
}
