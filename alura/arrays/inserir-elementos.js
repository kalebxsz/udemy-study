/* COMO ADICIONAR UM VALOR EM UM ARRAY

const notas = [10, 6, 8]
console.log(notas);

// PARA ADICIONAR UM VALOR NO ARRAY É PUSH 

notas.push(7)
console.log(notas);


const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);


const compras = ['maça', 'abacaxi', 'laranja', 'mamao']
console.log(compras);
compras.push('arroz')
console.log(compras); */

const arrayVazio = [];
const arrayNaoVazio = [1, 2, 3];

console.log(Boolean(arrayVazio)); // Saída: true - Mesmo sendo um array vazio, é "truthy"
console.log(Boolean(arrayNaoVazio)); // Saída: true - Um array com elementos também é "truthy"