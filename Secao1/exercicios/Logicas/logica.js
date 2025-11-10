// ESCREVA UMA FUNÇÃO QUE RECEBA 2 NÚMEROS E RETORNE O MAIOR DELES 


function valorMaior(x, y){
    if (x > y){
    console.log(`o ${x} é maior`)
} else {
    console.log(`O ${y} é maior`);
    
}

}
valorMaior(19, 10)


const valorMax = (x, y) => x > y ? x : y; 
console.log(valorMax(15, 30))
