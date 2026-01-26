
function rand (min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise ((resolve, reject)=> {
        if (typeof msg !== 'string') {
            reject('Cai no erro!!')
            return;
        };
         setTimeout(()=> {
        resolve(msg);
    }, tempo)
    })  
}

// Promise.all
/* const promises = [
    'Primeiro Valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 3000),
    esperaAi('Promise 3', 3000),
    'Outro Valor'
];
Promise.all(promises)
.then(valor => {
    console.log(valor)
})
.catch(e => {
    console.log(ERROR);
    
}) */


// Promise.race 
const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];
Promise.race(promises)
.then(valor => {
    console.log(valor)
})
.catch(e => {
    console.log(e);
    
})


// Promise.resolve
// Promise.reject