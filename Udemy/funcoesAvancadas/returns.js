// Existe funções que retornam valores e outras que não precisam retornar nada. 

/* function criaPessoa (nome, sobrenome){
    return {nome, sobrenome};
}

const p1 = criaPessoa('kaleb', 'Canabarro')

console.log(p1);

// ISSO É A MESMA COISA SE CRIARMOS 

const p2 = {
    nome: 'Kaleb',
    sobrenome: 'Canabarro'
}

console.log(p2)
xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// EXEMPLO DE COMO DECLARAR UMA FUNÇÃO CHAMANDO OUTRA FUNÇÃO 

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto;
    }
    return falaResto
}
const fala = falaFrase ( 'Olá' );
const resto = fala('Mundo!')
console.log(resto); */



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
function criaMultiplicador (multiplicador){
    return function(n){
        return n * multiplicador;
    }
}
const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(2);
const quadriplica = criaMultiplicador(2)


console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
