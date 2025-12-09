const aluno = "Kaleb";
const notaFinal = 3;
const faltas = 4; 
const advertencia = 0;
// UTILIZANDO O OPERADOR OU (||) APENAS UMA DAS CONDIÇÕES PRECISA SER TRUE 
/* if(notaFinal < 5 || faltas > 3){  
    console.log(`Voce foi reprovado`)
} else {
    console.log(`Voce não foi reprovado!`);
    
} */
// UTILIZANDO OPERADOR AND (&&) AS DUAS CONDIÇÕES PRECISAM SER TRUE 
if(notaFinal < 5 && faltas > 3){  
    console.log(`Voce foi reprovado`)
} else {
    console.log(`Voce não foi reprovado!`);
    
}


