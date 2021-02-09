
let icons = document.querySelectorAll('.c-skills-item');
for (let i = 0; i < icons.length; i++) {
	icons[i].animate([
		{ opacity: 0 },
		{ opacity: 1 }
	], {
		duration: 1000,
		direction: "normal",
		easing: "ease-out",
		fill: "forwards",
		iterations: 1,
		delay: 500 * i
	});
}

setInterval(function() {
	for (let i = 0; i < icons.length; i++) {
		icons[i].animate([
			{ opacity: 0 },
			{ opacity: 1 }
		], {
			duration: 1000,
			direction: "normal",
			easing: "ease-out",
			fill: "forwards",
			iterations: 1,
			delay: 500 * i
		});
	}
}, 10000);

