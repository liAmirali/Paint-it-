var temp = $('#canvas').width();
$('#canvas').css('height', temp + "px");

// Creating the canvas pixels
for(var i = 1; i <= 1600; i++){
	$('#canvas').append('<div class="pixels"></div>')
}

var selectedColor = "red";
function selectColor(color){
	selectedColor = color;
	$('.colors').css('color', "white");
	$(`#${color}`).css('color', color);
	return selectedColor;
}
var isClickedDown = false;
$('#canvas .pixels').on('mousedown', function(){
	isClickedDown = true;
	$(this).css('background-color', selectedColor);

	$('#canvas .pixels').on('mouseover mouseup', function mouseState(e) {
		if(e.type == "mouseover" && isClickedDown == true){
			$(this).css('background-color', selectedColor);
		}
		else if(e.type == "mouseup"){
			isClickedDown = false;
		}
	});
});