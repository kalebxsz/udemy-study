// O ESCOPO LÉXICO PERMITE "VISITAR" OS VIZINHOS E VER AS DECLARAÇÕES DAS VARIAVEIS E USALAS QUANDO NECESSÁRIO

// ATENÇÃO QUANDO TIVER ALGO DECLARADO DENTRO DO ESCOPO

const nome = 'Kaleb';

function falaNome(){
    console.log(nome);
    
}
function usaFalaNome(){
    falaNome();
}


usaFalaNome();