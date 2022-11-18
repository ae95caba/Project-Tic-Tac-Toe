const gameboardHtml = document.getElementById("gameboard");
gameboardHtml.style.display = "none"


let winnerDetectedSwitch; 
let gameboard = ["","","","","","","","",""];

let gaimeboard = (function(){
    var board = ["","","","","","","","",""];
    var outputBoard = function () {
        for (let i = 0;i<9; i++){
            //console.log(document.getElementById(i))
            document.getElementById(i).innerText = gameboard[i];
            
        }
    };

    var markCell = function(e){
        if(e.target.innerText){return}
        else{
            e.target.innerText = game.playerTurn;
            
            gameboard[e.target.id] = game.playerTurn;
            detectWin(game.playerTurn);
            detectTie()
            game.SwitchTurn();
        } 
    };

    var markCellGlobal = function(){
        
            for(let i = 0 ; i<9; i++){
        
                document.getElementById(i).addEventListener("click",mark);
            }
    };

    var markCellGlobalRemove = function(){
        for(let i = 0 ; i<9; i++){

            document.getElementById(i).removeEventListener("click",mark);
        }  
    };

    return{
      gameboard, outputBoard,markCellGlobal,markCellGlobalRemove  
    };

})();




let game={playerTurn: "x", SwitchTurn: function(){
    if(this.playerTurn =="x"){this.playerTurn= "o";}
    else{this.playerTurn = "x"};
}, 
    
};

const PlayerFactory = function (name,team){
    return {name,team};
}

let player= PlayerFactory("John","x");

let player1;
let player2;

//display the array's content in html
function displayAR(){
    for (let i = 0;i<9; i++){
        //console.log(document.getElementById(i))
        document.getElementById(i).innerText = gameboard[i];
        
    }
}

displayAR();

//places x or o in the clicked cell
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

//add mark to the board
function addMarkToBoard(){
    for(let i = 0 ; i<9; i++){

        document.getElementById(i).addEventListener("click",mark);
    }
}

//removes mark from board
function removeMarkToBoard(){
    for(let i = 0 ; i<9; i++){

        document.getElementById(i).removeEventListener("click",mark);
    }
}

//defaul status
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
    ){
        display.innerText = `${player} won the game`;
        removeMarkToBoard();
        winnerDetectedSwitch = true;
        }
    };


function detectTie(){
    let cellsFull = 0
    for(let i = 0; i<9; i++){
        if(gameboard[i]){cellsFull++;};
    }
    if (cellsFull == 9) {
        
        display.innerText="is a tie";
         
    }
}

/////////////////////////////////////////////////////////
//form

const form = document.getElementById("myForm");
const player1Name = document.getElementById("player-one");
const player2Name = document.getElementById("player-two");
const playerSelection = document.getElementById("player-selection");
const startButton = document.getElementById("start");

//disables submit refreshing page
form.addEventListener("submit",function(e){
    e.preventDefault();   
});

//sets players names and team
//clears the inputs
//hides the form items
//shows the gameboard
form.addEventListener("submit",fun1);
function fun1 (){
    player1 = PlayerFactory(player1Name.value, "x");
    player2 = PlayerFactory(player2Name.value,"o");
    player1Name.value="";
    player2Name.value="";
    playerSelection.style.display = "none" 
    gameboardHtml.style.display = "grid";
    startButton.style.display = "none";
}

//////////////////////////////////////////////////
//reset and display


const display = document.getElementById("display");
const reset = document.getElementById("reset");


//resets board array and html
//if a winner was detected re-adds mark to board
//resets display

reset.addEventListener("click",fun2);
function fun2(){
    gameboard = ["","","","","","","","",""];
    displayAR();
    if(winnerDetectedSwitch){addMarkToBoard();};
    display.innerText = "";
    
}

