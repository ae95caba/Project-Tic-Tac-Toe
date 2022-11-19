const gameboardHtml = document.getElementById("gameboard");
gameboardHtml.style.display = "none"


//this objetcs values will be set by  gaime.start..
let playerOne; 
let playerTwo;


let gaimeboard = (function(){
    

    var board = ["","","","","","","","",""];
    var outputBoard = function () {
        for (let i = 0;i<9; i++){
            //console.log(document.getElementById(i))
            document.getElementById(i).innerText = gaimeboard.board[i];
            
        }
    };

    var markCell = function(e){
        if(e.target.innerText){return}
        else{
            e.target.innerText = gaime.teamTurn;
            
            gaimeboard.board[e.target.id] = gaime.teamTurn;
            gaime.detectTie()
            gaime.detectWin(gaime.teamTurn);
            
            gaime.switchTurn();
        } 
    };

    var markCellGlobal = function(){
        
            for(let i = 0 ; i<9; i++){
        
                document.getElementById(i).addEventListener("click",markCell);
            }
    };

    var markCellGlobalRemove = function(){
        for(let i = 0 ; i<9; i++){

            document.getElementById(i).removeEventListener("click",markCell);
        }  
    };

    return{
      board, outputBoard,markCellGlobal,markCellGlobalRemove  
    };

})();



//////////////////////////////
let gaime = (function(){

   
    const form = document.getElementById("myForm");
    const player1Name = document.getElementById("player-one");
    const player2Name = document.getElementById("player-two");
    const playerSelection = document.getElementById("player-selection");
    const startButton = document.getElementById("start");
    const display = document.getElementById("display");
    const reset = document.getElementById("reset");

    var preventDefault = function(){
        
        form.addEventListener("submit",function(e){
            e.preventDefault();   
        });
    }

    var enableStart = function (){

        form.addEventListener("submit",startGame);
        function startGame (){
            playerOne = PlayerFactory(player1Name.value, "x");
            playerTwo = PlayerFactory(player2Name.value,"o");
            player1Name.value="";
            player2Name.value="";
            playerSelection.style.display = "none" 
            gameboardHtml.style.display = "grid";
            startButton.style.display = "none";
        }

    }

    var enableReset = function(){

        reset.addEventListener("click",resetGame);
        function resetGame(){
            gaimeboard.board = ["","","","","","","","",""];
            gaimeboard.outputBoard();
            if(gaime.winnerDetectedSwitch){gaimeboard.markCellGlobal();};
            display.innerText = "";
    
        }
    }

    var teamTurn = "x";

    var switchTurn = function (){
        if(gaime.teamTurn ==playerOne.team){gaime.teamTurn= playerTwo.team;}
        else{gaime.teamTurn = playerOne.team};
    }

    var winnerDetectedSwitch = false;

    var detectWin = function (player){
        if(
            gaimeboard.board[0] == player && gaimeboard.board[1] == player && gaimeboard.board[2] == player ||
            gaimeboard.board[3] == player && gaimeboard.board[4] == player && gaimeboard.board[5] == player ||
            gaimeboard.board[6] == player && gaimeboard.board[7] == player && gaimeboard.board[8] == player ||
            ///////////////////////////////////////////////////
            gaimeboard.board[0] == player && gaimeboard.board[3] == player && gaimeboard.board[6] == player ||
            gaimeboard.board[1] == player && gaimeboard.board[4] == player && gaimeboard.board[7] == player ||
            gaimeboard.board[2] == player && gaimeboard.board[5] == player && gaimeboard.board[8] == player ||
            ///////////////////////////////////////////////////
            gaimeboard.board[0] == player && gaimeboard.board[4] == player && gaimeboard.board[8] == player ||
            gaimeboard.board[2] == player && gaimeboard.board[4] == player && gaimeboard.board[6] == player 
            ){
                display.innerText = `${player} won the game`;
                gaimeboard.markCellGlobalRemove();
               gaime.winnerDetectedSwitch = true;
            }
    }

    var detectTie = function (){
        let cellsFull = 0
        for(let i = 0; i<9; i++){
            if(gaimeboard.board[i]){cellsFull++;};
        }
        if (cellsFull == 9) {
            display.innerText="is a tie";    
        }
    }

    return {preventDefault, enableStart, enableReset,detectWin,detectTie,switchTurn, teamTurn, winnerDetectedSwitch};

}) ();
////////////////////////////////

const PlayerFactory = function (name,team){
    return {name,team};
}


//defaul status
gaimeboard.markCellGlobal();

/////////////////////////////////////////////////////////
//form


//disables submit refreshing page
gaime.preventDefault();

//////////////////////////////////////////////////
//reset and display





//resets board array and html
//if a winner was detected re-adds mark to board
//resets display
gaime.enableReset();
//sets players names and team
//clears the inputs
//hides the form items
//shows the gameboard
gaime.enableStart();

