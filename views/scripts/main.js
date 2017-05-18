function drawBoard(){
	var html_str=''

	for(var i=0; i<board.length; i++){
		html_str+=`<div class='w3-row'>`
		for(var j=0; j<board[0].length; j++){
			if(board[i][j] == 0){
				html_str+=`<div class='blank'></div>`
			}else if(board[i][j] == 1){
				html_str+=`<div class='filled'></div>`
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
	for(var x=0; x<l[0].length; x++){//# of rows
		html_shape+=`<div class='shape'>`
		for(var y=0; y<l[0][x].length; y++){
			if(l[0][x][y]===0){
				html_shape += `<div class='blank_shape l'></div>`
			}else if(l[0][x][y] ===1){
				html_shape += `<div class='filled_shape l'></div>`
			}//end elseif
		}
}

	//for(var x=0; x<l.length; x++){ //however many elements in the array
		
		// for(var y=0; y<l[0].length; y++){ //however many elements in the top row of the first array in the first element
		// 	html_shape+=`<div class='shape'>`
		// 	for(var z=0; z<l[0][0]; z++){
		// 		if(l[0][y][z]===0){
		// 			html_shape += `<div class='blank_shape l'></div>`
		// 		}else if(l[0][y][z] ===1){
		// 			html_shape += `<div class='filled_shape l'></div>`
		// 		}//end elseif
		// 	}//end innermost for
		// }//end inner for
		html_shape+=`</div>`
	//}//end outer for
	$('#shape').html(html_shape)
}

$(document).ready(function(){
	drawBoard()
	generateShape()
})


	

