var prompt = require('prompt');

prompt.start();

console.log('Welcome to Tic Tac Toe');

var player1;
var player2;

var gameBoard = [
' | | ',
'-----',
' | | ',
'-----',
' | | '
];

var help = [
'a|b|c',
'-----',
'd|e|f',
'-----',
'g|h|i'
];

// Possible plays:
// Row 1:
var a = gameBoard[0][0];
var b = gameBoard[0][2];
var c = gameBoard[0][4];

// Row 3:
var d = gameBoard[2][0];
var e = gameBoard[2][2];
var f = gameBoard[2][4];

// Row 5:
var g = gameBoard[4][0];
var h = gameBoard[4][2];
var i = gameBoard[4][4];

// Once a play is made, that position can no longer be accessed.

var options = {
  a: true,
  b: true,
  c: true,
  d: true,
  e: true,
  f: true,
  g: true,
  h: true,
  i: true
}

// Plays made by player 1 and player 2
var play1;
var play2;

prompt.get(['player1Name'], function(err, results){
  player1 = results.player1Name;
  prompt.get(['player2Name'], function(error, res){
    player2 = results.player2Name;
    console.log('Let\'s begin!');
    console.log('First up ' + player1);
    prompt.get(['player1turn'], function(err, results){
      play1 = results.player1turn;
      options[play1] = false;
      gameBoard[play1] = 'X';
      console.log(gameBoard);
    });
  });
});
