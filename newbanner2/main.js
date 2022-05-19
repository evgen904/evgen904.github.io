document.addEventListener("DOMContentLoaded", function () {
    let bg1 = document.querySelector('.js-parallax-bg1')
    let bg2 = document.querySelector('.js-parallax-bg2')
    let banner2 = document.querySelector('.js-block2');

    function parallax2(event) {
        //let shiftItemX1 = event.clientX*Number(20)/1000
        let shiftItemX2 = event.clientX*Number(8)/1000
        //bg1.style.transform = `translate3d(${shiftItemX1-40}px, 0px, 0px)`
        bg2.style.transform = `translate3d(${shiftItemX2}px, 0px, 0px)`
    }

    if (banner2) {
        banner2.addEventListener('mousemove', parallax2) 
    }
});