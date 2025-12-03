// RETURN

// RETORNA UM VALOR 

// TERMINA UMA FUNÇÃO


function soma (a, b){
    return a + b;
}





function criarPessoa (nome, sobrenome){
    return {nome, sobrenome}
}

const p1 = criarPessoa('Luiz', 'Augusto')

const p2 = {
    nome: 'Kaleb',
    sobrenome: 'Canabarro'
}

function falaFrase (comeco){
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}


const olaMundo = falaFrase('Olá')
console.log(olaMundo);