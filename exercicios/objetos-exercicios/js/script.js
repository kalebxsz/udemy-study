function myForm () {
const form = document.querySelector('.form');
const resultado = document.querySelector('.resultado');

const pessoas = []; 

function recebeEventoForm (evento) {
    evento.preventDefault();
    const nome = form.querySelector('.nome')
    const sobrenome = form.querySelector('.sobrenome')
    const peso = form.querySelector('.peso')
    const altura = form.querySelector('.altura')

    // console.log(nome.value)
    // console.log(sobrenome.value)
    // console.log(peso.value)
    // console.log(altura.value)
  

}
form.addEventListener('submit', recebeEventoForm)


/* form.onsubmit = function(evento) {
    evento.preventDefault();
    alert(1);
    console.log('foi enviado') 
}*/
}
myForm();