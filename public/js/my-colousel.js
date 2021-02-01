'strict mode'

let images = document.querySelectorAll('.image');
let index = 0;
images[index].style["z-index"] = "1";
images[index].animate([
	{ opacity: 0 },
	{ opacity: 1 }
], {
	duration: 1000,
	direction: "normal",
	easing: "ease-out",
	fill: "forwards",
	iterations: 1
});


setInterval(function() {
	images[index].style["z-index"] = "1";
	images[index].animate([
		{ opacity: 1 },
		{ opacity: 0 }
	], {
		duration: 1000,
		direction: "normal",
		easing: "ease-out",
		fill: "forwards",
		iterations: 1
	});


	index++;
	if(index === 3) index = 0;

	images[index].style["z-index"] = "-1";	
	images[index].animate([
		{ opacity: 0 },
		{ opacity: 1 }
	], {
		duration: 1000,
		direction: "normal",
		easing: "ease-out",
		fill: "forwards",
		iterations: 1
	});

}, 8000);

//for click
images.forEach(img => img.addEventListener('click', corousel));

function corousel(e) {
	e.preventDefault();
	images[index].style["z-index"] = "1";
	images[index].animate([
		{ opacity: 1 },
		{ opacity: 0 }
	], {
		duration: 1000,
		direction: "normal",
		easing: "ease-out",
		fill: "forwards",
		iterations: 1
	});


	index++;
	if(index === 3) index = 0;

	images[index].style["z-index"] = "-1";	
	images[index].animate([
		{ opacity: 0 },
		{ opacity: 1 }
	], {
		duration: 1000,
		direction: "normal",
		easing: "ease-out",
		fill: "forwards",
		iterations: 1
	});
}