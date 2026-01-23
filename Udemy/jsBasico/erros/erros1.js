// TRY      => é tentar essa operação 

// Catch    => se a primeira der erro, essa será a resposta 

// THROW

// try {
//     console.log(naoExisto)
// }catch(err){
//     console.log('naoExisto não existe');
//     console.log(err);
// }


// function soma(x, y){
//     if (
//         typeof x !== 'number' ||
//         typeof y !== 'number'
//     ){
//         throw new Error ('x e y precisam ser números.')
//     }
//     return x + y
// } 
// try {
// //console.log(soma(5, 5))
//  console.log(soma(5, '5'))
// } catch (error){
//     console.log('Esta errando na linha tal')
// }

function dividir(a, b) {
  if (b === 0) {
    // Lança um erro se o divisor for zero
    throw new Error("Não é possível dividir por zero.");
  }
  return a / b;
}

try {
  const resultado = dividir(10, 0);
  console.log(resultado);
} catch (error) {
  // O erro lançado pelo throw é capturado aqui
  console.log("Erro capturado:", error.message); // Saída: Erro capturado: Não é possível dividir por zero.
}