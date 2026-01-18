// Objeto é uma atribuição formada por duas {}

// o que esta dentro do objeto é considerado suas "Chaves"

// Exemplo:
const pessoa = {
    nome: 'Kaleb',
    sobrenome: 'Canabarro'
};

// Existe duas formas de acessar esses valores, a tradicional abaixo 
/* console.log(pessoa.nome);
console.log(pessoa.sobrenome);
// E também por []
console.log(pessoa['nome']);
console.log(pessoa['sobrenome']); */


//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// criando um novo obj 

/* const pessoa1 = new Object()
pessoa1.nome = 'Gabriel'
pessoa1.sobrenome = 'Borba'

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
 */




// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

// PARA DELETAR UMA CHAVE DE UM OBJETO 


/* const amigo = {
    nome: 'Guylherme',
    sobrenome:'Santos'
};
console.log(amigo);  // ANTES DE APAGAR A CHAVE NOME 
delete amigo.nome
console.log(amigo); // DEPOIS DE APAGAR A CHAVE NOME 
 */



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx


// METODOS DE OBJ 
const pessoa1 = new Object()
pessoa1.nome = 'Gabriel';

pessoa1.sobrenome = 'Borba';

pessoa1.idade = 23;

pessoa1.falarNome = function(){
    return `${this.nome} esta falando seu nome.`
};

pessoa1.getDataNascimento = function() {
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa1.getDataNascimento());



// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx