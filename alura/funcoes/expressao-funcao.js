const alunoReprovou = function (notaFinal, faltas){
    if (notaFinal < 7 && faltas > 4){
        return true;
    }else {
        return false;
    }
}

console.log(alunoReprovou(5, 6));
console.log(alunoReprovou(7, 4));