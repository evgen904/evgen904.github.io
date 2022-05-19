document.addEventListener("DOMContentLoaded", function () {
	function parallax(event) {
	    document.querySelectorAll('.js-pillow').forEach(item => {
	        let speed = item.getAttribute('data-speed')
	        let shiftItemX = event.clientX*Number(speed)/1000
	        let shiftItemY = event.clientY*Number(speed)/1000
	        item.style.transform = `translate3d(${shiftItemX}px, ${shiftItemY}px, 0px)`
	    })
	}

	let banner1 = document.querySelector('.js-block');

	if (banner1) {
	    banner1.addEventListener('mousemove', parallax)
	    banner1.addEventListener('mouseover', () => {
	        banner1.classList.remove('animate');
	    })
	    banner1.addEventListener('mouseout', () => {
	        banner1.classList.add('animate');
	    })
	}

});