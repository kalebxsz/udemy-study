



// try {
// // É EXECUTADA QUANDO NÃO HÁ ERROS NO CÓDIGO
// }catch(e){
// // É EXECUTADA QUANDO HÁ ERROS NO CÓDIGO
// }finally {
// // SEMPRE É USADO PARA FINALIZAR UMA AÇÃO QUE DEU ERRO 
// }



try{
    console.log('Arquivo aberto!')
    console.log(arquivo)
}catch(e){
     console.log('deu erro em try, estou verificando')
    
 }finally{
    console.log('FINALLY: eu sou executado mesmo assim! ')
}