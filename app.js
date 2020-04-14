const navSlide = () => {
    const burger = document.querySelector('.menu');
    const nav = document.querySelector('.nav-links');
    const close = document.querySelector('.close');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });

    close.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}

navSlide();

window.onresize = function() {
    document.body.height = window.innerHeight;
}
window.onresize(); // called to initially set the height.