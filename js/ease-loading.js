'strict mode'

//ease loading picture.
window.addEventListener('load', function() {
	"use strict";
	let picImage = document.getElementsByTagName('img')[0];   
	picImage.setAttribute('src', picImage.getAttribute('data-src'));                 
  }, false);

  
document.querySelectorAll('.c-qualification .c-qualification-container-row-cards .o-buttons')
  .forEach(btn => btn.addEventListener('mouseover', hoverImageTransform));
document.querySelectorAll('.c-qualification .c-qualification-container-row-cards .o-buttons')
  .forEach(btn => btn.addEventListener('mouseout', baseImage));

function hoverImageTransform(e) {
	e.preventDefault();
    let parent = this.parentNode;
	let img = parent.firstElementChild;
		img.style.boxShadow = "0px 0px 13px 0px rgba(50, 50, 50, 0.75)";
		img.style["-webkit-transform"] = "rotateX(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px)";
		img.style["-ms-transform"] = "rotateX(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px)";
		img.style["transform"] = "rotateX(0deg) rotateZ(0deg) translate3d(0px, 0px, 0px)";
		img.style["transform-style"] = "preserve-3d";
}

function baseImage(e) {
	e.preventDefault();
	let parent = this.parentNode;
	let img = parent.firstElementChild;
	if(img.className === "c-qualification-js-image-float-left") {
		//box shadow left position
		img.style["box-shadow"] = "-80px 60px 15px 5px rgba(0,0,0,0.4)";
		img.style["-webkit-box-shadow"] = "-80px 60px 15px 5px rgba(0,0,0,0.4)";
		img.style["-moz-box-shadow"] = "-80px 60px 15px 5px rgba(0,0,0,0.4)";
		//transform left position
		img.style["-webkit-transform"] = "rotateX(60deg) rotateZ(-60deg) translate3d(-120px, 0px, 70px)";
		img.style["-ms-transform"] = "rotateX(60deg) rotateZ(-60deg) translate3d(-120px, 0px, 70px)";
		img.style["transform"] = "rotateX(60deg) rotateZ(-60deg) translate3d(-120px, 0px, 70px)";
		img.style["transform-style"] = "preserve-3d";
	} else if(img.className === "c-qualification-js-image-float-right") {
		//box shadow right position
		img.style["box-shadow"] = "80px 60px 15px 5px rgba(0,0,0,0.4)";
		img.style["-webkit-box-shadow"] = "80px 60px 15px 5px rgba(0,0,0,0.4)";
		img.style["-moz-box-shadow"] = "80px 60px 15px 5px rgba(0,0,0,0.4)";
		//transform right position
		img.style["-webkit-transform"] = "rotateX(-60deg) rotateZ(60deg) translate3d(120px, 0px, -70px)";
		img.style["-ms-transform"] = "rotateX(-60deg) rotateZ(60deg) translate3d(120px, 0px, -70px)";
		img.style["transform"] = "rotateX(-60deg) rotateZ(60deg) translate3d(120px, 0px, -70px)";
		img.style["transform-style"] = "preserve-3d";
	}
}
  