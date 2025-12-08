let tecnico = {
    nome: 'Kaleb',
    id: 22, 
    local: 'Av. Pinheiro Borda',
    número: 565,
    idade: 22
}

let {nome, id, idade, ...resto} = tecnico

console.log(nome, resto)