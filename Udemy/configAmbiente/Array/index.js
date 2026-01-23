/* const name = "kaleb";
const age = 23
const anoAtual = 2025

const dateBirth = (anoAtual - age);

console.log(`${name} nasceu em ${dateBirth} e tem ${age} anos `)
 
------------------------------------------------------------------------*/

// ARRAYS 

/* Como funciona o seletor
            01234    ==> a string é indexado por caracter 
const nome = 'kaleb'
console.log(nome[4]) */


//                 0         1        2         3        4      ==> ele é indexado por elemento 
const alunos = ['Kaleb', 'Nathan', 'Cassio', 'Lucas', 'Caio'];

console.log(typeof alunos);
console.log(alunos instanceof Array)



/* alunos.push('Marcio')
alunos.push('Gabriel')     

console.log(alunos.slice(0, 5)); */   // escolhe quantos elementos tu quer que apareça


// console.log(alunos[10])


/* delete alunos[1]  // NÃO RECOMENDADO UTILIZAR
console.log(alunos) */



/* const removidosFinal = alunos.pop();     // .pop remove do final 
const removidosInicio = alunos.shift(); // .shift remove do inicio 
console.log(removidosInicio);
console.log(removidosFinal)
console.log(alunos) */





/* 
alunos.unshift('Marcio')   // sempre que adicionar essa seção, ele adiciona no inicio do array esse elemento 
console.log(alunos)

 */


/* alunos.push('Marcio');    ====== >> adiciona no fim, sem precisar do [alunos.length]
alunos.push('Lucas');
console.log(alunos) */



// alunos[3] = 'Gabriel'    // Para trocar o elemento dentro da ARRAY
// alunos[5] = 'Lucas' // para adicionar um novo elemento na ARRAY

// alunos[alunos.length] ==> Após ler o tamanho da lista, ele adiciona o elemento ao final 
/* alunos[alunos.length] = 'Marcio'
alunos[alunos.length] = 'Maria'
alunos[alunos.length] = 'Lucas'

console.log(alunos) */



/* console.log(alunos)
console.log(alunos[0])
console.log(alunos[1])
console.log(alunos[2])
console.log(alunos[3])
console.log(alunos[4])
 */