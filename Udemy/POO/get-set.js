// SYMBOL em POO


const _velocidade = Symbol();
class Carro {
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    set velocidade (valor){
        console.log('SETTER');
        
        if(typeof valor !== 'number') return; 
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade (){
        console.log('GETTER');
        return this[_velocidade];
    }

    acelerar() {
        if (this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar() {
        if (this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

// para rodar, os metodos precisam estar dentro da classe
// quando trabalhamos com setter e getter, não chamamos a função com (); e sim com "="
const c1 = new Carro('Brasilia');
// console.log(c1.velocidade);
c1.velocidade = 88;
console.log(c1.velocidade);
