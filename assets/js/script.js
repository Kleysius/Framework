window.addEventListener('load', function () {
    setTimeout(function () { // attendre 3 secondes pour masquer le loader
        const pageLoader = document.querySelector('.page-loader');
        pageLoader.style.opacity = '0';
        setTimeout(function () { // attendre que l'animation se termine
            pageLoader.style.display = 'none';
        }, 500);
    }, 5500);
});

let percent = 0;
function progressSim() {
    document.querySelector('.text').innerHTML = percent + '%';
    if (percent >= 100) {
        clearTimeout(sim);
    }
    percent++;
}

let sim = setInterval(progressSim,50);



let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    text.style.marginTop = value * 1.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 0.5 + 'px';
});


// Apparition des éléments au scroll

ScrollReveal().reveal('.whatisframe', {
    distance: '70px',
    duration: 2000,
    origin: 'left',
    reset: true,
    delay: 300,
});

ScrollReveal().reveal('.frontend', {
    distance: '70px',
    duration: 2000,
    origin: 'right',
    reset: true,
    delay: 300,
});

ScrollReveal().reveal('.linkto', {
    distance: '50px',
    duration: 2000,
});

ScrollReveal().reveal('.intro', {
    distance: '40px',
    duration: 2000,
    origin: 'top',
});

ScrollReveal().reveal('.avantages', {
    distance: '80px',
    duration: 2000,
    origin: 'left',
    delay: 500,
});

ScrollReveal().reveal('.inconv', {
    distance: '80px',
    duration: 2000,
    origin: 'right',
    delay: 1000,
});