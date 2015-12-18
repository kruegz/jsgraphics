// Module for getting important information from browser

// Function for getting the bounds of the page
function getPageBounds() {
	var bounds = [];
	
	bounds[0] = window.innerWidth
		|| document.documentElement.clientWidth
		|| document.body.clientWidth;

	bounds[1] = window.innerHeight
		|| document.documentElement.clientHeight
		|| document.body.clientHeight;
	
	return bounds;
}

