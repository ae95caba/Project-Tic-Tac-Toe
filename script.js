let gameboard = ["","","","","","","","",""];
let Gameboard = {gameboard};
let game={playerTurn: "x", SwitchTurn: function(){
    if(this.playerTurn =="x"){this.playerTurn= "o";}
    else{this.playerTurn = "x"};
}, 
    //turn
};

const PlayerFactory = function (name,team){
    return {name,team};
}

let player= PlayerFactory("John","x");

function displayAR(){
    for (let i = 0;i<9; i++){
        //console.log(document.getElementById(i))
        document.getElementById(i).innerText = gameboard[i];
        
    }
}

displayAR();
function mark(e){
    //console.log(e.target.innerText);
    if(e.target.innerText){return}
    else{
        e.target.innerText = game.playerTurn;
        
        gameboard[e.target.id] = game.playerTurn;
        detectWin(game.playerTurn);
        detectTie()
        game.SwitchTurn();
    }
}

function addMarkToBoard(){
    for(let i = 0 ; i<9; i++){

        document.getElementById(i).addEventListener("click",mark);
    }
}

addMarkToBoard();

////////////////////////////////////////////////

function detectWin(player){
if(
gameboard[0] == player && gameboard[1] == player && gameboard[2] == player ||
gameboard[3] == player && gameboard[4] == player && gameboard[5] == player ||
gameboard[6] == player && gameboard[7] == player && gameboard[8] == player ||
///////////////////////////////////////////////////
gameboard[0] == player && gameboard[3] == player && gameboard[6] == player ||
gameboard[1] == player && gameboard[4] == player && gameboard[7] == player ||
gameboard[2] == player && gameboard[5] == player && gameboard[8] == player ||
///////////////////////////////////////////////////
gameboard[0] == player && gameboard[4] == player && gameboard[8] == player ||
gameboard[2] == player && gameboard[4] == player && gameboard[6] == player 
){alert(`${player} won the game`);};
}

function detectTie(){
    let cellsFull = 0
    for(let i = 0; i<9; i++){
        if(gameboard[i]){cellsFull++;};
    }
    if (cellsFull == 9) {
        alert("is a tie");
    }
}