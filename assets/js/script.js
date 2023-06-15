if (document.querySelector('.parallax')) {
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
        // si la valeur est supérieur ou égale à la hauteur de la fenêtre, on arrête l'effet parallax
        if (value >= window.innerHeight / 2) {
            text.style.marginTop = 0;
            leaf.style.top = 0;
            leaf.style.left = 0;
            hill5.style.left = 0;
            hill4.style.left = 0;
            hill1.style.top = 0;
        }
    });
}

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