var prompt = require('prompt');

prompt.start();

console.log('Welcome to Tic Tac Toe');

var player1;
var player2;
prompt.get(['player1Name'], function(err, results){
  player1 = results.player1Name;
  prompt.get(['player2Name'], function(error, res){
    player2 = results.player1Name;
    console.log('Let\'s begin!');
  });
});

var gameBoard = [
' | | ',
'-----',
' | | ',
'-----',
' | | '
];

/*
Possible plays:
Row 1:
gameBoard[0][0];
gameBoard[0][2];
gameBoard[0][4];

Row 2:
gameBoard[1][0];
gameBoard[1][2];
gameBoard[1][4];

Row 3:
gameBoard[2][0];
gameBoard[2][2];
gameBoard[2][4];

Once a play, that position can no longer be accessed.
*/
