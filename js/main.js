const scrollreveal = require("scrollreveal");

function checkWidthAndHide() {
    const element = document.getElementById('slider');
    if (element.offsetWidth < 768) {
        element.style.display = 'none';
    } else {
        element.style.display = 'block';
    }
}

// Initial check
checkWidthAndHide();

// Add event listener for window resize
window.addEventListener('resize', checkWidthAndHide);

// scroll animation
Scrollreveal.reveal('.headline', {duration:2000});