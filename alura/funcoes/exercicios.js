
// Crie uma função que receba o nome de uma pessoa como argumento e retorne uma saudação personalizada. Em seguida, chame a função e exiba a saudação no console.

function saudacao (nome){
    return `Olá ${nome}, seja muito bem vindo`
}
console.log(saudacao('Kaleb'));

// Crie uma função que receba a idade de uma pessoa e retorne se ela é maior de idade (idade >= 18). Imprima o resultado no console.
function maiorIdade (idade){
    if (idade >= 18){
        return `Você já é maior de idade`
    }else {
        return `Você ainda não é maior de idade`
    }
}
console.log(maiorIdade(15));
console.log(maiorIdade(25));


// Crie uma função que receba uma string e verifique se é um palíndromo (uma palavra que é lida da mesma forma de trás para frente) utilizando o método de string reverse(). Retorne true se for um palíndromo e false caso contrário. Imprima o resultado no console.
function verificaPalindromo(palavra) {
    const stringInvertida = palavra.split('').reverse().join('');
    return palavra.toLowerCase() === stringInvertida.toLowerCase();
}

console.log(verificaPalindromo("arara"));     // PRATICAR MAIS 
console.log(verificaPalindromo("Frase"));


// Crie uma função que receba três números como parâmetros e determine qual é o maior entre eles. Utilize estruturas condicionais (if, else) para comparar os valores e determinar o maior. Imprima o maior valor no console.

function encontraMaiorValor(num1, num2, num3) {
  let maior = num1;

  if (num2 > maior) {
      maior = num2;
  }                                        // PRATICAR MAIS 

  if (num3 > maior) {
      maior = num3;
  }

  return maior;
}

console.log(encontraMaiorValor(12, 56, 32));

// Crie uma arrow function chamada calculaPotencia que receba dois parâmetros: a base e o expoente. A função deve calcular a potência da base elevada ao expoente e retornar o resultado.

const calcular = (base, expoente) => {
    return base ** expoente
}

console.log(calcular(3, 9))