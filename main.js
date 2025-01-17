let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}

const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    display: 400,
    reset: true
})

sr.reveal('.text', {delay: 200, origin: 'top'})
sr.reveal('.heading', {delay: 200, origin: 'top'})
sr.reveal('.ride-container .box', {delay: 250, origin: 'top'})
sr.reveal('.services-container .box', {delay: 200, origin: 'top'})
sr.reveal('.about-text', {delay: 200, origin: 'top'})
sr.reveal('.about-img', {delay: 300, origin: 'left'})
sr.reveal('.reviews-container', {delay: 200, origin: 'top'})
sr.reveal('.newsletter .box', {delay: 200, origin: 'bottom'})