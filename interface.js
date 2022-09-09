//Aqui estamos criando a nossa função pra quando a página for carregada
document.addEventListener('DOMContentLoaded',()=>{

    let squares= document.querySelectorAll('.square')

    // Agora eu vou adicionar pra cada um desses elementos um evento de click

    squares.forEach((square)=>{
        square.addEventListener('click',handleClick)
    })
})

function handleClick(event){
    console.log(event.target)
}