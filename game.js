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

console.log('First up ' + player1);
console.log(gameBoard);

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

Row 3:
gameBoard[2][0];
gameBoard[2][2];
gameBoard[2][4];

Row 5:
gameBoard[4][0];
gameBoard[4][2];
gameBoard[4][4];

Once a play is made, that position can no longer be accessed.
*/
