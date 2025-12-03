/*
OBJETOS 
Objetos são basicamente variáveis com muitos valores dentro. 

ex: const carro = {marca: "ford", modelo:"Ka", ano:2015}

Os valores dentro de um objeto são chamados propriedades. 

Objetos também podem ter métodos. Um método é uma função colocadas dentro de uma propriedade. 
*/

const carro = {
    marca:"Ford",
    modelo:"Ka",
    ano: 2015,
    placa: "ABC-1234",
    buzina: function(){alert('biiiiiiiiiiiiiiiiii')},
    completo: function(){
        return `A marca é ${this.marca} e o modelo é ${this.modelo}`
    }
};
console.log(carro.completo());


