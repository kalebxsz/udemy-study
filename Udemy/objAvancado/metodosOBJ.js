// Object.values       // PARA VERIFICAR APENAS OS VALORES DO OBJETOS DENTRO DE UM ARRAY 
// const produto = {nome: 'Produto', preco: 1.8}
// console.log(Object.values((produto)));





// Object.entries
// PARA RETORNAR O VALOR SEPARADO DO OBJ = nome e valor <=> preco e valor
const produto = {nome: 'Produto', preco: 1.8}
console.log(Object.entries((produto)));





/* // Object.getOwnPropertyDescriptor(o, 'prop') 
// Verificar as propriedades das chaves de um objeto

const produto = {nome: 'Produto', preco: 1.8};

console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));


// UTILIZAR TAMBÉM O DEFINE PROPRIETY PARA FAZER MODIFICAÇÕES 
Object.defineProperty(produto, 'nome', {
    writable: false,
    enumerable: true,
    configurable: false,
    value: 'Qualquer coisa'
})


console.log(Object.getOwnPropertyDescriptor(produto, 'nome'));

 */







// Object.assign (des, any)

/* const produto = {nome: 'Produto', preco: 1.8};
const caneca = Object.assign({}, produto, {material: 'Porcelana'})      /// Melhor utilizar o ... Spread, FAZEM A MESMA COISA

console.log(produto); 
console.log(caneca);
 */
































// ...spread 

/* const produto = {nome: 'Produto', preco: 1.8};

const outraCoisa  = {
    ...produto,
    material: 'Porcelana'
} 

outraCoisa.nome = 'Outro nome';
outraCoisa.preco = 2.5;



console.log(outraCoisa);
console.log(produto); */


//  utilizado para copiar o objeto, sem alterar o seu valor inicial 







































// // Já vimos 
// Object.keys (mostra as chaves do obj )

// Object.freeze(congela o objeto)

// Object.defineProperties  (define as propriedades de uma ou mais chaves do objeto)

// Object.defineProperty (define apenas uma chave do objeto)




