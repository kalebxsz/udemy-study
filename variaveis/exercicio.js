/* 
    Luiz Otavio Miranda tem 39 anos, pesa 84kg 
    tem 1.80 de altura e seu IMC é de 25.92
*/ 

const nome = 'Kaleb Gabriel'
const sobrenome = 'Canabarro'
const age = 23
const peso = 82
const altura = 1.77

let imc = peso / (altura * altura)
let resultado = imc.toFixed(2)
let anoAtual = 2025

let dateBirth = anoAtual - age

// saida esperada ao final 

/*  console.log(nome, sobrenome, 'tem', age, 'anos, pesa', peso, 'kg')
console.log('tem', altura, 'de altura e seu IMC é de ', resultado)
console.log(nome, 'nasceu em ', dateBirth, '.' )    */

console.log(`${nome} ${sobrenome} tem ${age} anos`)
console.log(`pesa ${peso} kg, tem ${altura} de altura`);
console.log(`seu IMC é de ${resultado} e nasceu em ${dateBirth}`);

