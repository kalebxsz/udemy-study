const falar = { 
            falar() {
            console.log(`${nome} esta falando.`);
            }}
const beber = {
            beber() {
            console.log(`${nome} esta bebendo.`);
            }}
const comer = {
            comer() {
            console.log(`${nome} esta comendo.`);
            }}

const pessoaPrototype = Object.assign({}, falar, beber, comer);


function criaPessoa (nome, sobrenome){
     return Object.create(pessoaPrototype, {
        nome: {value: nome },
        sobrenome: {value: sobrenome}
    })
}
const p1 = criaPessoa ('Kaleb', 'Canabarro')
const p2 = criaPessoa ('Carlos', 'Santos')
const p3 = criaPessoa ('Gabriel', 'Henrique')

console.log(p1);
console.log(p2);
console.log(p3);

