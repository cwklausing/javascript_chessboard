$(function(){
	makeBoard();
})

var chessboard = [];

createBoardArray();

var pawn = {
	touched: false
}

function Rook(color, position) {
	this.color = color;
	this.position = position;
	this.movement = function (current, target) {
		if(current[0] === target[0] || current[1] === target[1]) {
			return true;
		} else {
			return false;
		}
	}
}

function Knight(color, position) {
	this.color = color;
	this.position = position;
	this.movement = function (c, t) {
		//check if target moves off board
console.log("is target0 between 0 and 7?", (t[0] <= 7));
		if(!(0 <= t[0] || t[0] <= 7) && !(0 <= t[1] || t[1] <= 7)) {
			return false
		} else {
			return true
		}
	}
}
//Instantiate chess pieces
var wr1 = new Rook('white', [0, 0]);
var wr2 = new Rook('white', [0, 7]);
var br1 = new Rook('black', [7, 0]);
var br2 = new Rook('black', [7, 7]);
var wn1 = new Knight('white', [0, 1]);
var wn2 = new Knight('white', [0, 6]);
var bn1 = new Knight('black', [7, 1]);
var bn1 = new Knight('black', [7, 6]);


console.log(wn1, wn2);
console.log('can I move nb1 to nc3? : ', wn1.movement([0,0], [8, 7]));
// console.log('can I move nb1 to na3? : ', wn1.movement(wn1.position, [0, 3]));
// console.log('can I move nb1 to nd2? : ', wn1.movement(wn1.position, [3, 2]));
// console.log('can I move nb1 to nc4? : ', wn1.movement(wn1.position, [2, 4]));
// console.log('can I move nb1 to na4? : ', wn1.movement(wn1.position, [0, 4]));

function createBoardArray () {
	for(var i = 8; i > 0; i--) {
		for(var j = 0; j < 8; j++) {
			chessboard.push([i, j]);
		}
	}
}

function makeBoard() {
		var color = 'black';
		for(var i = 0; i < chessboard.length; i++) {
			$('.chessboard').append('<div class="' + color + ' square ' + chessboard[i][0] + chessboard[i][1] + '"></div>');
			if(chessboard[i][1] == 7){
				color = color;
			} else if (color == 'black') {
				color = 'white';
			} else {
				color = 'black';
			}
		}	
	}