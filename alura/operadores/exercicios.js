// Crie variáveis que armazenem o valor do saldo, de depósito e de um saque de uma conta bancária, depois realize operações de adição e subtração entre eles utilizando uma variável chamada operacao, considerando a função de cada variável criada anteriormente. Exiba os resultados finais no console.

let saldo = 0;
let deposito = 0;
let saque = 0;

let operação = null;


function depositar(deposito,saldo){
    if (deposito + saldo){
        return saldo += deposito
    }
}
// console.log(depositar(deposito, saldo));


function sacar(saldo, saque){
    if (saldo - saque){
        return saldo -= saque
    }
}


if (depositar(deposito, saldo) >= 101){
    console.log("ESTAMOS COM O PATACO")
}else if (sacar(saldo, saque) <= 100){
    console.log("TAMO DURO");
    
}else {
    console.log("SOU CLT");
    
}




// Crie uma variável numérica com um valor. Utilize um operador ternário para verificar se esse valor é par ou ímpar. Exiba o resultado no console.

let valor = 10;
let texto = valor % 2 === 0 ? 'PAR' : 'IMPAR'
console.log(texto)

// Considere uma situação em que você está verificando se um usuário está logado e tem permissão de administrador para acessar determinada funcionalidade. Utilize variáveis booleanas para simular essas condições e use o operador AND para verificar se ambas são verdadeiras.
const admin = true;
const userNormal = false; 

if(admin && !userNormal){
    console.log('você é admin')
}else{
    console.log("Voce não é admin");
    
}


// Declare duas variáveis booleanas e use o operador OR para verificar se pelo menos uma delas é verdadeira. Exiba o resultado no console.
const tech = true;
const teQui = 'false';

let condicao = tech || teQui

console.log(condicao);


// Imagine um sistema que determina se um usuário tem idade suficiente para comprar o ingresso para um show. Declare duas variáveis que determinem a idade mínima e qual a idade do usuário e utilize estruturas condicionais (if, else) para determinar se o usuário pode realizar a compra.
let idade = 16;
let idadePermitida = 16;

if (idade >= idadePermitida){
    console.log("PODE COMPRAR INGRESSO!!")
}else{
    console.log("NÃO PODE COMPRAR INGRESSO AINDA");
    
}
