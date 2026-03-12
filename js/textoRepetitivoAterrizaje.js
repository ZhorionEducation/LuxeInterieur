const path = document.querySelector('.floating-text path');
function repetirAnimacion() {
    path.style.animation = 'none';
    setTimeout(() => {
        path.style.animation = 'escribir 15.5s ease forwards';
    }, 10);
}
setInterval(repetirAnimacion, 15500);

