// IIFE - immediately invoked function expression 

(function(){
    const sobrenome = 'Canabarro';
    function criaNome(nome){
    return nome + ' ' + sobrenome;
}
function falaNome(){
    console.log(criaNome('Kaleb'));
    
}
falaNome();
})();

// o modelo é simples

// Abre o parenteses 
// ()

// function
// function qualquerCoisa

// abre chaves 
// (function(){})

//após isso, fora dos primeiros (), abra mais um e coloque ;

/* 
(function(){

})(); 

*/