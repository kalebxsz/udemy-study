// PROMISES 

function rand (min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    // RECEBE O CONSTRUTOR DA PROMISSE E UTILIZA RESOLVE OU REJECT 
    // RESOLVE PARA PROSSEGUIR = SUCESS
    // REJECT PARA ERROS 
    return new Promise ((resolve, reject)=> {
        if (typeof msg !== 'string') reject('BAD VALUE');

         setTimeout(()=> {
        resolve(msg);
    }, tempo)
    })  
}

esperaAi('CONEXÃO COM O BANCO DE DADOS', rand(1, 3))
.then(resposta => {
    console.log(resposta);
    return esperaAi('BUSCANDO USUÁRIOS', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi(2222, rand(1, 3))
}).then(resposta => {console.log(resposta);
}).then(resposta => console.log('DADOS DOS USUÁRIOS NA TELA')
)
.catch(e => {console.log('ERRO: ', e);
});

