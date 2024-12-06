//pegar as variaveis 
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');



function validacaoCampos(){
    if (num1.value === "" || num2.value === "") {
        alert("Por favor preencher os campos");
        return; 
    }

    
    var valor1 = Number(num1.value);
    var valor2 = Number(num2.value);

    
    if (valor2 > valor1) {
        alert("Enviado com sucesso!");
    } else {
        alert("O segundo número precisa ser maior que o primeiro");
    }
}