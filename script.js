// Your JS goes here

var body = document.getElementsByTagName('body')[0];
var board = document.createElement('main');
var boardWidth = 9;
var color = 59;

body.style.margin = "0";
board.className = 'board';
body.insertBefore(board, body.firstChild);

for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
    var tile = document.createElement('div');
    tile.style.width = '11.1vw';
    tile.style.height = '11.1vw';
    tile.style.float = 'left';
    if((j + i * 9)  % 2 === 0){
      tile.style.backgroundColor = 'rgb(59,' + color + ",238)";
    }else{
      tile.style.backgroundColor = 'rgb(' + color + ',40' + ",238)";;
    }
    board.appendChild(tile);
  }
  color += Math.floor(141 / 9);
}
