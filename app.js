$(function(){
	makeBoard();

	function makeBoard() {
		var color = 'black';
		for(var i = 0; i < chessboard.length; i++) {
			$('.chessboard').append('<div class="' + color + ' square ' + chessboard[i][0] + chessboard[i][1] + '"></div>');
			if(chessboard[i][0] == 'h'){
				color = color;
			} else if (color == 'black') {
				color = 'white';
			} else {
				color = 'black';
			}
		}
		
	}
})

var chessboard = [];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

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
	this.movement = function (current, target) {
		if(current[0] == (target[0 - 1] || target [0 + 1]) && (current[1] - target [1] || target[1] - current[1]) === 2) {
			return true;
		} else if (current[0] === (target[0 - 2] || target[0 + 2]) && (current[1] - target[1] || target[1] - current [1]) === 1) {
			return true;
		} else {
			return false;
		}
	}
}
//Instantiate chess pieces
var wr1 = new Rook('white', ['a', 1]);
var wr2 = new Rook('white', ['h', 1]);
var br1 = new Rook('black', ['a', 8]);
var br2 = new Rook('black', ['h', 8]);
var wn1 = new Knight('white', ['b', 1]);
var wn2 = new Knight('white', ['g', 1]);
var bn1 = new Knight('black', ['b', 8]);
var bn1 = new Knight('black', ['b', 8]);


console.log(wr1, wr2, br1, br2);
console.log('can I move nb1 to nc3? : ', wn1.movement(wn1.position, ['c', 3]));
console.log('can I move nb1 to na3? : ', wr1.movement(wr1.position, ['a', 3]));
console.log('can I move nb1 to nd2? : ', wn1.movement(wn1.position, ['d', 2]));
console.log('can I move nb1 to nc4? : ', wn1.movement(wn1.position, ['c', 4]));
console.log('can I move nb1 to na4? : ', wn1.movement(wn1.position, ['a', 4]));

function createBoardArray () {
	for(var i = 1; i < 9; i++) {
		for(var j = 0; j < letters.length; j++) {
			chessboard.push([letters[j], i]);
		}
	}
}