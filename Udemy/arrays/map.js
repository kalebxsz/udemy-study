// AQUI VERMEMOS MAP, ISSO ALTERA O VALOR DO ARRAY

// DOBRE OS VALORES DO ARRAY 

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);

// console.log(numerosEmDobro);

// PARA CADA ELEMENTO:


// RETORNE APENAS UMA STRING COM O NOME DA PESSOA 
const pessoas =[ 
    {nome: 'Luiz' ,    idade: 62 },
    {nome: 'Maria',    idade: 23},
    {nome: 'Eduardo',  idade: 55},
    {nome: 'Leticia',  idade: 19},
    {nome: 'Rosana',   idade: 32},
    {nome: 'Wallace',  idade: 47},
]; 
const nomes = pessoas.map(obj => obj.nome)
console.log(nomes);


// REMOVA APENAS A CHAVE "NOME" DO OBJETO
const pessoas2 =[ 
    {nome: 'Luiz' ,    idade: 62 },
    {nome: 'Maria',    idade: 23},
    {nome: 'Eduardo',  idade: 55},
    {nome: 'Leticia',  idade: 19},
    {nome: 'Rosana',   idade: 32},
    {nome: 'Wallace',  idade: 47},
];

const idades = pessoas2.map(obj => ({idade: obj.idade}))
console.log(idades);

// ADICIONE UMA CHAVE id EM CADA OBJETO 

const pessoas3 =[ 
    {nome: 'Luiz' ,    idade: 62 },
    {nome: 'Maria',    idade: 23},
    {nome: 'Eduardo',  idade: 55},
    {nome: 'Leticia',  idade: 19},
    {nome: 'Rosana',   idade: 32},
    {nome: 'Wallace',  idade: 47},
];

const id = pessoas3.map(function(obj, indice){
    obj.id = (indice + 1)
    return obj
})

console.log(id);


// CRIANDO UM NOVO OBJ A PARTIR DO OBJ ANTIGO

