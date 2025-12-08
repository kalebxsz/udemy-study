// PARAMETROS 
// se colocarmos parametros dentro dessa função que não esta no escopo inicial, só pode ser chamada, se utilizar ARGUMENTS

// function funcao() {
//     console.log('oi');
// }
// funcao(); 


function soma() {
    let total = 0;
    for (let argumento of arguments)
        total += argumento;
    console.log(total);
}

soma(1, 2, 3, 4, 5, 6, 7);





// function loto(a, b ){   // aqui é caso não tenha parametro suficiente 
//     b = b || 0;         // aqui faremos elas ter um número padrão 
//     console.log(a + b);

// }
// loto(2);



//UNICA FORMA DE ENVIAR O VALOR PADRÃO É COM UNDEFINED




function conta(operador, acumulador, ...numeros){
    for(let numero of numeros) {
        if (operador === '+') acumulador += numero; 
        if (operador === '-') acumulador -= numero; 
        if (operador === '*') acumulador *= numero; 
        if (operador === '/') acumulador /= numero; 
    }
    console.log(acumulador)
}


conta('-', 10, 50, 20, 660, 10);
