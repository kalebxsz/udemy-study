/* //Define Property

function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // Configurando a propriedade 'estoque' com controles específicos
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // Mostra a chave  no console.log ou for-in
        value: estoque,      // Define o valor inicial
        writable: false,     // NÃO permite alterar o valor (p1.estoque = 1000 não funcionará)
        configurable: false  // NÃO permite apagar a chave nem reconfigurá-la
    });
}

const p1 = new Produto('Camisa', 25, 5);
p1.estoque = 1000; // Como 'writable' é false, isso será ignorado

console.log(p1); 

 */




//Define Properties
function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    // Configurando a propriedade 'estoque' com controles específicos
    Object.defineProperty(this, 'estoque', {
        enumerable: true,    // Mostra a chave  no console.log ou for-in
        value: estoque,      // Define o valor inicial
        writable: false,     // NÃO permite alterar o valor (p1.estoque = 1000 não funcionará)
        configurable: false  // NÃO permite apagar a chave nem reconfigurá-la
    });
    Object.defineProperties(this, {
        nome:{
        enumerable: true,    // Mostra a chave  
        value: nome,      // Define o valor inicial
        writable: false,     // NÃO permite alterar o valor 
        configurable: false  // NÃO permite apagar a chave nem reconfigurá-la
        },
        preco:{
        enumerable: true,    // Mostra a chave 
        value: preco,      // Define o valor inicial
        writable: false,     // NÃO permite alterar o valor 
        configurable: false  // NÃO permite apagar a chave nem reconfigurá-la
        }
    })
}

const p1 = new Produto('Camisa', 25, 5);

console.log(p1); 



//DEFINIR PROPRIEDADES COM Property or Properties => property define apenas uma chave, já o Properties, define mais de uma chave. 