// Your JS goes here

var body = document.getElementsByTagName('body')[0];
var board = document.createElement('main');
var boardWidth = 9;

body.style.margin = "0";
board.className = 'board';
body.insertBefore(board, body.firstChild);

for (var i = 1; i <= Math.pow(9,2); i++) {
  var tile = document.createElement('div');
  tile.style.width = '11.1vw';
  tile.style.height = '11.1vw';
  tile.style.float = 'left';
  if(i % 2 === 0){
    tile.style.backgroundColor = 'red';
  }else{
    tile.style.backgroundColor = 'black';
  }
  board.appendChild(tile);
}
