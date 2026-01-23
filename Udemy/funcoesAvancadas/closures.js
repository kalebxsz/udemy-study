// Uma função interna consegue acessar variáveis da função externa, mesmo após a função externa já ter sido finalizada.


/* function retornaFuncao(){
    const nome = 'Kaleb';
    return function (){
        return nome;
    };
}
const funcao = retornaFuncao();

console.dir(funcao);
 */


function contador() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const incrementar = contador();

incrementar(); // 1
incrementar(); // 2
incrementar(); // 3