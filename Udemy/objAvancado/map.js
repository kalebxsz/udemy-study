// MAP EM OBJETOS

const pessoas = [
    {id: 3, nome: 'Kaleb'},
    {id: 2, nome: 'Henrique'},
    {id: 1, nome: 'Gabriel'}
];

// console.log(pessoas);

// const novasPessoas = {};

// for (const pessoa of pessoas){
//     const {id} = pessoa;
//     novasPessoas[id] = {...pessoas}
// }

const novasPessoas = new Map();

for (const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa})
}
console.log(novasPessoas);
