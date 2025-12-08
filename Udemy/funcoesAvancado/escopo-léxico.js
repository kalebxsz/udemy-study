// ESCOPO LÉXICO

const nome = 'Gabriel';   

function falaNome(){
    console.log(nome)
}

function usaFalaNome(){
    falaNome();
}

usaFalaNome()



/* Escopo Léxico (Lexical Scoping)
O que é: É o mecanismo pelo qual a maioria das linguagens de programação 
(incluindo JavaScript) define o acesso às variáveis. 
O escopo de uma variável é determinado pelo local onde ela foi declarada fisicamente no código.
Como funciona: Quando uma função interna precisa de uma variável, ela primeiro procura em seu próprio escopo. 
Se não a encontrar, ela "sobe" para o escopo imediatamente superior (escopo pai) onde foi definida
 e assim sucessivamente, até chegar ao escopo global.
Determinação Estática: O escopo léxico é estático, 
o que significa que você pode determinar o escopo de uma variável apenas lendo o código, sem precisar executá-lo. */ 