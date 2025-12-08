// Closures

/* 
O que são: Uma closure é a combinação de uma função com o seu ambiente léxico (o escopo ao redor onde ela foi criada).
Como funcionam: As closures permitem que uma função interna continue acessando as variáveis do seu escopo externo,
 mesmo depois que a função externa (que a criou) já terminou sua execução.
Consequência do Escopo Léxico: A closure é uma consequência ou uma aplicação prática do escopo léxico. 
Sem o escopo léxico, as closures não seriam possíveis.  */


// GLOBAL 

function retornaFuncao(nome){
       return function(){
        return nome;
    }
}
const funcao = retornaFuncao('Kaleb');
const funcao2 = retornaFuncao('Gabriel')
console.dir(funcao);
console.dir(funcao2);

console.log(funcao(), funcao2());