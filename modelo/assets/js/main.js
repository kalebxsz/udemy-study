const relogio = document.querySelector('.relogio')
const start = document.querySelector('.start')
const pause = document.querySelector('.pause')
const reload = document.querySelector('.reload')



function timerAtual(){
    return timer.toLocaleString('pt-BR', {
        hour12: false
    })
}























// Pegar o botão de iniciar 
start.addEventListener('click', function timerAtual(){
    let timerStart = new Date(); 
    return timerStart.toLocaleString('pt-Br',{
        hour12: false
    })
})
// pegar o botão de pausar 
pause.addEventListener('click', function(event){
    alert('Cliquei no botão de pausar')
})
// pegar o botão de reiniciar 
reload.addEventListener('click', function(event){
    alert('Cliquei no botão reiniciar')
})