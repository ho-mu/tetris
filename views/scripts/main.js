function drawBoard(){
	var html_str=''

	for(var i=0; i<board.length; i++){
		html_str+=`<div class='w3-row'>`
		for(var j=0; j<board[0].length; j++){
			if(board[i][j] == 0){
				html_str+=`<div class='blank'></div>`
			}else if(board[i][j] == 1){
				html_str+=`<div class='filled'></div>`
			}else if(board[i][j] =='l'){
				html_str+=`<div class='filled l'></div>`
			}else if (board[i][j] == '99'){
				html_str+=`<div class='off_board'></div>`
			}
		}//innerfor
		html_str+=`</div>`
	}//outerfor

	$('#board').html(html_str)
}

function generateShape(){//calling method will need to pass in the element
	//console.log(`shape000: ${l[0][1][0]}`)
	var html_shape = ''
	//l[element].length will give you the height
	//l[element][0].length will give you the number of columns of the shape
	for(var x=0; x<shapes.line[0].length; x++){//# of rows
		html_shape+=`<div class='shape'>`
		for(var y=0; y<shapes.line[0][x].length; y++){
			if(shapes.line[0][x][y]===0){
				html_shape += `<div class='blank_shape l'></div>`
			}else if(shapes.line[0][x][y] ===1){
				html_shape += `<div class='filled_shape l'></div>`
			}//end elseif
		}
	}
		html_shape+=`</div>`
	//}//end outer for
	$('#shape').html(html_shape)
}

function moveShape(){
	//update x=0y=5 with l
	//on the 3rd pass though, the l
	var row_placement = 1 //top

	for(var s=0;s<board[row_placement-1].length; s++){
		//in cell 3, add the left corner of the shape
		board[row_placement-1][s+3]="l"
	}
	drawBoard()
}

$(document).ready(function(){
	drawBoard()
	generateShape()
})


	

