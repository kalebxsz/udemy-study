// SetTimeout ==>  Executa uma única vez depois de um tempo definido. 
                  // Ideal quando você quer atrasar algo ou rodar apenas uma vez no futuro.
                  
// setInverval ==> Executa uma função repetidamente a cada intervalo de tempo.
                // Ideal para tarefas repetitivas, como atualizar relógios, contadores, verificações etc.







function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR', {
        hour12: false
    });
}

const timer = setInterval(function() {
    console.log(mostraHora());
}, 1000);

setTimeout(function(){
    clearInterval(timer);
}, 10000);