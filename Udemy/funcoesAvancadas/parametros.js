// Parametros de uma função
// Arguments > sustenta todos os argumentos da função 
// como buscar? Igual fazemos com arrays, pegaremos pelos indices arguments[0]

/* function funcao(a,b,c){
    // console.log(arguments); // inclusive, ele já trás as posições de cada indice
    let total = 0;
    for (let argumento of arguments)
        total += argumento
    console.log(total, a, b, c);
    
}
funcao(1, 2, 3, 4, 5, 6, 7); */

// como funciona a declaração com parametros definidos
// quando informado um número x de parametros e não chamar todos, retorna undefined mas não gera erro. 
// podemos adicionar um valor definido em casos de expressões matematicas  a= 1, b = 2, c = 3

// function funcao(a, b = 2, c =4){  // maneira atual > definindo diretamete nos parametros
//     b = b || 0                   // maneira antiga 
//     console.log(a + b + c);
    
// }
// funcao(2, 10);   // Tudo que está dentro dos parênteses na chamada da função são argumentos.

// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//  COMO PULAR O VALOR DO PARAMETRO
//  APENAS COM UNDEFINED PARA "PULAR" A DECLARAÇÃO DOS ARGUMENTOS.


/* function funcao(a, b =2, c =4){
    console.log(a + b + c);
    
}
funcao(2, undefined, 20); */


// ATRIBUIÇÃO via DESESTRUTURAÇÃO OBJETO 
/* function funcao({nome, sobrenome, idade}){
    console.log(nome, sobrenome, idade );
    
}
let obj = {nome: 'Kaleb', sobrenome: 'Gabriel', idade: 23}
funcao(obj); */

// ATRIBUIÇÃO via DESESTRUTURAÇÃO ARRAY 
/* function funcao([valor1, valor2, valor3]){
    console.log(valor1, valor2, valor3 );
    
}

funcao(['kaleb', 'Gabriel', 23]); */


// rest operator
// UTILIZANDO REST OPERATOR (UTILIZANDO O RESTO DA OPERAÇÃO)
// O REST DEVE SER SEMPRE O ÚLTIMO PARAMETRO

/* const conta = function(operador, acumulador, ...numeros){    
    for (let numero of numeros){
        if (operador === '+') acumulador += numero
        if (operador === '-') acumulador -= numero
        if (operador === '*') acumulador *= numero
        if (operador === '/') acumulador /= numero
    }
    console.log(acumulador);
    
    
};
conta('+', 1, 20, 30, 40, 50); */

const conta = function(...args){    
console.log(args);
 
};
conta('+', 1, 20, 30, 40, 50);
