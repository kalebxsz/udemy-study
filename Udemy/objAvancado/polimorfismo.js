// SuperClass


// ESSA É A PAI 
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta; 
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    if (valor > this.saldo ){
        console.log(`Saldo insufinciente: R$${this.saldo} `);
        return
    }
    this.saldo -= valor;
    this.verSaldo();
}; 

Conta.prototype.depositar = function (valor){
    this.saldo += valor; 
    this.verSaldo();
}; 

Conta.prototype.verSaldo = function (){
    console.log(
        `ag./c: ${this.agencia}/${this.conta} | ` + 
        `Saldo: R$${this.saldo.toFixed(2)}`
    );
    
}; 

// FILHA 1 
function CC(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
        this.limite = limite;
    }


    CC.prototype = Object.create(Conta.prototype);
    CC.prototype.constructor = CC;


    CC.prototype.sacar = function (valor){
    if (valor > (this.saldo + this.limite) ){
        console.log(`Saldo insufinciente: R$${this.saldo} `);
        return
    }
    this.saldo -= valor;
    this.verSaldo();
};
// FILHA 2 
function CP(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
    }


    CP.prototype = Object.create(Conta.prototype);
    CP.prototype.constructor = CP;

/* 
AMBAS SEGUEM A ESTRUTURA DO PAI, MAS COM ALTERAÇÕES NO SEU prototype
isso se chama polimorfismo
*/

const cc = new CC(1, 1, 0, 100);

cc.depositar(10);
cc.sacar(110);
cc.sacar(1);

console.log();

const cp = new CP(1, 1, 0, 100);

cp.depositar(10);
cp.sacar(110);
cp.sacar(1);