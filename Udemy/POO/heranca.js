class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado){
            console.log(this.nome + ' ja ligado');
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if (!this.ligado){
            console.log(this.nome + ' já desligado');
            
        }
    }
}

const d1 = new DispositivoEletronico('iPhone X')

d1.ligar()
d1.ligar()
console.log(d1);



// EXTENDS é uma forma de herdar em classes 
class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);

        this.cor = cor;
        this.modelo = modelo;
    }
}
const s1 = new Smartphone('iPhone', 'Preto', '12 pro max')

console.log(s1)