// Declaração de função (Hosting)

/*
Hoisting é o comportamento em que o interpretador processa declarações antes da execução do código.
*/

function falaOi(){
    console.log('oi');
    
}
falaOi('oi')

// Objetos de primeira classe
// Function Expression
// Ou seja, pode ser tratada como um dado, fornecer e receber dados de uma outra função.


const souUmDado = function(){
    console.log('Sou um dado');
    
    
};

souUmDado();

// Arrow Function 
// Uma forma mais limpa de declarar função
const funcaoArrow = () => {
    console.log('sou uma arrow function');
    
}
funcaoArrow();


// dentro de um objeto eu posso ter uma função

const obj = {
    falar(){
        console.log('Estou falando...');  
    }
};
obj.falar();
