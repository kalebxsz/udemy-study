function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

  let  estoquePrivado = estoque;
    // Configurando a propriedade 'estoque' com controles específicos
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // Mostra a chave  no console.log ou for-in
        // value: estoque,      // Define o valor inicial
        // writable: false,     // NÃO permite alterar o valor (p1.estoque = 1000 não funcionará)
        configurable: false,  // NÃO permite apagar a chave nem reconfigurá-la
        get: function (){
        return estoque
    },
    set: function(valor){
        if(typeof valor !== 'number'){
            estoquePrivado = valor;
        }
    }
    });
    
}

const p1 = new Produto('Camisa', 25, 5);

console.log(p1.estoque); 