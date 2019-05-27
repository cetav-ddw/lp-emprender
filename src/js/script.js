(function () {
	const animationVideo = document.querySelector('.wrapper-animation__video')
	window.addEventListener('scroll' ,playVideo);
	
	function playVideo () {
		animationVideo.play();
	}

}())
