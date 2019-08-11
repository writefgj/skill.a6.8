let progress = 0;

function plus(eventObject){
	progress = progress + eventObject.data.int;
	$("#my-progress-bar").width(`${progress}%`);
	
	console.log(progress);
}

function init() {
	$("#plus1").click({int: 1},plus);
	$("#plus3").click({int: 3},plus);
	$("#plus7").click({int: 7},plus);
}

$(document).ready(init);
