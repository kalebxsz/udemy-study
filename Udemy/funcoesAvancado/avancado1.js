// AS VARIAS MANEIRAS DE DECLARAR FUNÇÕES EM JAVASCRIPT 
// FUNCTION HOISTING 

function falaOie (){
    console.log('Oie')
}

falaOie(); 


// FIRST-CLASS OBJECTS (OBJETOS DE PRIMEIRA CLASSE)
// FUNCTION EXPRESSION 

const souUmDado = function() {
    console.log('Sou um dado. ')
};
souUmDado();


// ARROW FUNCTION 

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();


// Dentro de um OBJ 


const obj = {
    falar() {
        console.log('Estou falando...')
    }
}

obj.falar(); 