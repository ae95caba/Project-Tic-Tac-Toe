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
    else{e.target.innerText = game.playerTurn;
        game.SwitchTurn();
    }
}

function addMarkToBoard(){
    for(let i = 0 ; i<9; i++){

        document.getElementById(i).addEventListener("click",mark);
    }
}

addMarkToBoard();