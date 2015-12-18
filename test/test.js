// Get window info
var bounds = getPageBounds();

// Setup canvas
var canvas = document.getElementById("canvas");
canvas.width = bounds[0];
canvas.height = bounds[1];

var ctx = canvas.getContext("2d");


// Test drawRect
drawRect(ctx, 100, 100, 100, 100, "red");


// Test draw on an object
var object = {
	x: 300,
	y: 350,
	width: 70,
	height: 200,
	color: "blue"
};

draw(ctx, object);
