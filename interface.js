document.addEventListener('DOMContentLoaded',()=>{

    let squares= document.querySelectorAll('.square')
    squares.forEach((square)=>{
        square.addEventListener('click',handleClick)
    })
})

function handleClick(event){
    let square= event.target
    let position= square.id
    let jogador;

    if(playerTime == 0){
        jogador = "Escudo"
    }else{
        jogador = "espada"
    }

    if(handleMove(position)){
        setTimeout(() => {
            alert("O jogo acabou, o Vencedor foi o jogador usando "+ jogador)
        }, 10);
    }
    
    updateSquare(position)
}
function updateSquare(position) {
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class='${symbol}'></div>`
}

function resetGame(){
    let squares = document.querySelectorAll(".square");
    board = ["", "", "", "", "", "", "", "", ""];
    playerTime = 0;
    gameOver = false;
    squares.forEach((square) => {
    square.innerHTML = ""})

}

