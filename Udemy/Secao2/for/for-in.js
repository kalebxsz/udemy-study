// const lista = ['Kaleb', 'Cassio', 'Nathan'];

// for (let i in lista){
//     console.log(lista[i])
// }



// FOR IN, LE OS INDICES OU CHAVES DO OBJETOS 
const pessoa = {
    nome: 'kaleb',
    sobrenome: 'Canabarro',
    age: 23
};

for (let chave in pessoa){
    console.log(chave, pessoa[chave])
}