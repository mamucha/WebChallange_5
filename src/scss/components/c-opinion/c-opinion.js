const carouseSlide = document.querySelector('.c-opinions__container');
const carouseSlideBox = document.querySelectorAll('.c-opinion');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

//counter
console.log('hej');

let counter = 1;
const size = carouseSlideBox[0].clientWidth;
console.log(size);


carouseSlide.style.transform = 'translateX(' + (-size * counter) + 'px';

//button
nextBtn.addEventListener('click', () => {
    if (counter >= carouseSlideBox.length - 1) return;
    carouseSlide.style.transition = 'transform 0.5s ease-in-out';
    counter++;
    carouseSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouseSlide.style.transition = 'transform 0.5s ease-in-out';
    counter--;
    carouseSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
});

carouseSlide.addEventListener('transitionend', () => {
    if (carouseSlideBox[counter].id === 'lastClone') {
        carouseSlide.style.transition = 'none';
        counter = carouseSlideBox.length - 2
        carouseSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }

    if (carouseSlideBox[counter].id === 'fristClone') {
        carouseSlide.style.transition = 'none';
        counter = carouseSlideBox.length - counter;
        carouseSlide.style.transform = 'translateX(' + (-size * counter) + 'px';
    }
})