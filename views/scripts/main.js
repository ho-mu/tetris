function drawBoard(){
	var html_str=''

	for(var i=0; i<board.length; i++){
		html_str+=`<div class='w3-row'>`
		for(var j=0; j<board[0].length; j++){
			html_str+=`<div class='w3-col'></div>`
		}//innerfor
		html_str+=`</div>`
	}//outerfor

	$('#board').html(html_str)
}

$(document).ready(function(){
	drawBoard()
})
	

