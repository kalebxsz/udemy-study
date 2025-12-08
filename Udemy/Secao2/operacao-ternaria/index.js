// Funciona como um if else mais curto, referenciado por (? e :)
// ele é como (se não for true, é falso automaticamente.)
// utilizar somente quando for apenas duas opções  
// (condição) ?'Valor verdadeiro' : 'Valor falso')

const placar = 100


// if (placar >= 100){
//     console.log("ganhou")
// }else{
//     console.log("Perdeu")
// }


const comoGanhar = placar >=100 ? 'Ganhou' : 'Perdeu'
console.log(comoGanhar);
