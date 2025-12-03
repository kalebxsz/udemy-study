/*
FUNÇÕES 
Uma função JavaScript é um bloco de código projeto para exexutar uma tarefa específica.
É como uma pequena "Fabrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contrinuir para todo o código. 

Uma função JavaScript é executada quando "algo" a invoca (chama).
*/

// Pode se declarar quantos parametros quiser (dentro dos parenteses são os parametro)



// FUNÇÃO DE SOMA 

/* function soma (valor1, valor2){
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10,10);  // AQUI EU ESTOU CHAMANDO A FUNÇÃO 


var total = soma(15, 10);


alert(total) */



// FUNÇÃO PARA COTAÇÃO DO DOLAR 

/* function realParaDolar (real, cotacaoDolar){
    return real * cotacaoDolar;
}

let valorReal = 160
let cotacao = 5.35



let total = realParaDolar(valorReal, cotacao)

alert(`O valor da cotação atual é ${cotacao}, sendo assim, o visto custa ${realParaDolar(valorReal, cotacao)}`)

 */



/* function alertaHello (){
    alert("Fala Tropa!!!!")
}


alertaHello();
 */



// CONVERTER DE FAHRENHEIT PARA CELSIUS 

/* function paraCelsius(valorFahrenheit){
    return (5/9) * (valorFahrenheit - 32);
}

let x = paraCelsius(77);

alert(`A temperatura é de ${x}, graus celsius`) */






/* let valor1 = 10 
let valor2 = 15 

let soma = valor1 + valor2


// =========================

function soma1(valor1, valor2){

    return valor1 + valor2
}

console.log(soma, soma1(15, 100)) */


function maiorIdade(aluno, idadeAluno){
   
    if(idadeAluno > 18){
        console.log(`O ${aluno} já é maior de idade e não precisa mais que os pais compareça`)
    }else{
        console.log(`O ${aluno} ainda precisa que o responsável se apresente para a retirada do boletim`)
    }
}

maiorIdade("Kaleb", 23);