// Creo gruppo di immagini
const images = [
    `img/01.webp`,
    `img/02.webp`,
    `img/03.webp`,
    `img/04.webp`,
    `img/05.webp`
]
console.log(images);


// Dove devo mettere le immagini? Dentro a HTML carousel
    // Prendo elemento carousel da HTML
const carouselElement = document.querySelector('.carousel');
console.log(carouselElement);

let current = 0;

// Creo ciclo for per prendere tutte le immagini 
for (let i=0; i < images.length; i = i + 1) {
    console.log(i, images[i]);

    // // Inserisco tutte le immagini in carousel e creo contenitori slide per mettere dentro img
    carouselElement.innerHTML += `<div class="slide">
                                    <img src="${images[i]}">
                                </div> `;

}

// Ora devo prendere le slide e associarle current. (Mi crea un array)
const allSlides = document.getElementsByClassName('slide');
console.log(allSlides);

// A tutte le slide con indice 0 aggiungo classe current = display block
allSlides[current].classList.add('current');

// Aggiunte frecce in HTML ora le devo riportare in JS
const frecciaDown = document.getElementById('circle-down');
console.log(frecciaDown);

const frecciaUp = document.getElementById('circle-up');
console.log(frecciaUp);

frecciaDown.addEventListener('click',
    function() {
        console.log('Cliccato su freccia in alto');

        allSlides[current].classList.remove('current');

        current = current + 1;

        allSlides[current].classList.add('current');

    }
);


frecciaUp.addEventListener('click',
    function() {
        console.log('Cliccato su freccia in alto');

        allSlides[current].classList.remove('current');

        current = current - 1;

        allSlides[current].classList.add('current');

    }
);

