/* Entendendo Variáveis 
Variáveis são caixas que armazenam uma informação e passam a valer elas 
podendo variar, ou seja, podem ter qualquer tipo de valor 

no JavaScript são 3 tipos de variáveis 
-> var (um tipo GLOBAL de variável)
-> let (utilizada quando os valores da seção não são fixos)
-> const (Utilizada para deixar o valor constante) 
*/

/* var a = 3
var b = 2
                               é um modelo, mas não recomendado de declarar 
var c = a+b;

alert(c) */


/*  DECLARAÇÃO DE VARIAVEIS 

var a,b,c;

ATRIBUIÇÃO DA VARIAVEL 

a= 10;
b= 5;
c= a+b;

alert(c) */



/* // DECLARAÇÃO DE VARIAVEIS 

var nome, sobrenome, nomeCompleto; 
// ATRIBUIÇÃO DA VARIAVEL 

nome = 'Kaleb';
sobrenome = 'Canabarro'
nomeCompleto = nome + " " + sobrenome

document.getElementById("texto").innerHTML = nomeCompleto */


// ENTENDENDO LET 

/* let x = 10; // aqui é 10 

{
    let x = 2; // aqui é 2
}

//aqui também vai ser 10
document.getElementById("texto").innerHTML = x; 
 */
// o let só pega o primeiro, ou seja, não podemos redeclarar





let x = 10;
x = 15
console.log(x)