
/*
1 Declare três variáveis diferentes (uma para cada tipo: string, número e booleano) e atribua valores a elas. Em seguida, exiba o tipo de cada variável no console.
 */

/* 
const nome1 = "Kaleb";
const age1 = 23;
const dev = true;


console.log(typeof nome1, typeof age1, typeof dev); */


// =============================================================================




/* 
2 Crie duas variáveis, uma contendo seu primeiro nome e outra contendo seu último nome. Em seguida, combine-as em uma terceira variável usando o operador + e em uma quarta variável usando template strings. Por fim, imprima os resultados obtidos no console. 
*/
/* 
const nome2 = "Kaleb";
const sobrenome = "Canabarro";

const nomeCompleto = nome2 + sobrenome; 
const nomes = `${nome2} ${sobrenome}`


console.log(nome2, sobrenome, nomeCompleto, nomes) */




// =============================================================================



/* 
3 Declare duas variáveis, uma contendo um número e outra contendo uma string. Em seguida, combine-as em uma terceira variável usando template strings para montar uma frase e exiba o resultado no console.
 */
/* 

const nome3 = "Kaleb";
const age = 23;

const user = `o primeiro usuário é o ${nome3} e ele tem ${age} anos!!`

console.log(user);
 */


// =============================================================================
/* 
4 Crie uma variável inicializada com um valor de qualquer tipo e, em seguida, reatribua um novo valor a essa variável. Imprima ambos os valores no console após atribuí-los.
 */
/* let estudante = "Kaleb";

console.log(estudante)

estudante = "Gabriel";
console.log(estudante);
 */


// =============================================================================

/* 
5 Declare uma variável usando var fora de um bloco de código (por exemplo, if) e outra dentro desse bloco. Tente acessar essas variáveis dentro do bloco e fora dele utilizando console.log e analise os resultados. Faça o mesmo processo utilizando let e compare com os resultados anteriores.
 */
/* 
let nome = "Kaleb";   // INICIANDO A VARIAVEL 
console.log(nome);


if (1 > 0) {
    let nome = "Gabriel";    // ALTERANDO O VALOR DA VARIAVEL DENTRO DO ESCOPO
 console.log(nome)
}

console.log(nome)  // VERIFICANDO QUAL O NOME QUE ESTA NA VARIAVEL 

nome = "Canabarro"
console.log(nome);    // ATRIBUINDO OUTRO VALOR 
 */

// =============================================================================
/* 
6 Declare uma variável booleana que informa se está chovendo e utilize-a em uma estrutura condicional (if) para exibir uma mensagem informando se é preciso levar um guarda-chuva ou não dependendo do valor da variável.
 */

/* const estaChovendo = true; 

if (estaChovendo === true){
    console.log(`Esta chovendo, por favor, saia com o guarda-chuva!!`)
}else {
    console.log(`Não esta chovendo, vai sem guarda-chuva!!`)
}

 */