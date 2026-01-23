// FACTORY FUNCTIONS É UMA FUNÇÃO QUE RETORNA OBJETOS 
// É UTILIZADA BASTANTE A PALAVRA THIS 
// agora veremos a utilização do this 
// o this é usado para referenciar o contexto de execução atual, ou seja, quem está “chamando” a função naquele momento.

function criaPessoa(nome, sobrenome, a, p){
    return {
        nome, 
        sobrenome,
        // Getter
        get nomeSobrenome(){
            return `${nome} ${sobrenome}`
        },
        // Setter 
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.split(' ');
            console.log(valor);
            
        },

        fala: function(assunto){
            return `${this.nome} está ${assunto}`;
        },
        altura: a,
        peso: p,
        // getter >> apenas para obter o valor, não para chamar função
        get imc(){
            const indice = this.peso / (this.altura ** 2 );
            return indice.toFixed(2)
        }

    };

}

const p1 = criaPessoa('Kaleb', 'Canabarro', 1.77, 82);







