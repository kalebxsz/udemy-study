/*
OPERADORES LÓGICOS

&& -> AND -> E   ===>> TODAS AS EXPRESSÕES PRECISAM SER VERDADEIRAS PARA RETORNAR true

|| -> OR -> OU 

! -> NOT -> NÃO 
*/

// const expressaoAnd = (true && true && false && true);
// console.log(expressaoAnd);

//  const expressaoOr = (true || false || false)
//  console.log(expressaoOr);
 
const pessoa = {
    nome: 'Kaleb',
    age: 17,
    acompanhadoPais: false 
    

}

if (pessoa.age >= 18 || pessoa.age >= 16 && pessoa.acompanhadoPais === true) {
    console.log("Entrada Autorizada")
} else {
    console.log("Entrada Proibida")
}



