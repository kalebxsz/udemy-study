// CLASSE É A MESMA COISA QUE CRIAR UMA FUNÇÃO CONSTRUTORA 

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} esta falando`);
        
    }
    beber(){
        console.log(`${this.nome} esta bebendo`);
    }
    comer(){
        console.log(`${this.nome} esta comendo`);
    }
}
//Classe NÃO elimina prototype, ela só esconde a complexidade

// INSTACIAR === É CRIAR UM OBJETO A PARTIR DA CLASSE = MOLDE

const p1 = new Pessoa('Kaleb', 'Canabarro')

console.log(p1);

