// Your JS goes here

var body = document.getElementsByTagName('body')[0];
var board = document.createElement('main');
var boardWidth = 9;

body.style.margin = "0";
board.className = 'board';
body.insertBefore(board, body.firstChild);

for (var i = 1; i <= Math.pow(9,2); i++) {
  var color1 = Math.floor(Math.random() * 255 + 1);
  var color2 = Math.floor(Math.random() * 255 + 1);
  var color3 = Math.floor(Math.random() * 255 + 1);
  var tile = document.createElement('div');
  tile.style.width = '11.1vw';
  tile.style.height = '11.1vw';
  tile.style.float = 'left';
  tile.style.backgroundColor = 'rgb(' + color1 + ',' + color2 + ',' + color3 + ')'
  board.appendChild(tile);
}
