// Module to draw different things

// Function to draw a rectangle
function drawRect(ctx, x, y, width, height, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, width, height);
}

// Function to draw and object
function draw(ctx, object) {
	ctx.fillStyle = object.color;
	ctx.fillRect(object.x, object.y, object.width, object.height);
}
