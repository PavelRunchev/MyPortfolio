//ease loading picture.
window.addEventListener('load', function() {
	"use strict";
	let picImage = document.getElementsByTagName('img')[0];   
	picImage.setAttribute('src', picImage.getAttribute('data-src'));                 
  }, false);
  