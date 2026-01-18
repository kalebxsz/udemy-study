// como utilizar os 3 methodos juntos 

// FILTRE TODOS OS NÚMEROS PARES DO ARRAY
// DOBRE TODOS OS NÚMERO PARES 
// SOME TODOS OS VALORES 



const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros
.filter  (valor => valor % 2 === 0)
.map     (valor => valor * 2)
.reduce  ((ac, valor) => valor += ac);

console.log(numerosPares);
