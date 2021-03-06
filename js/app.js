const prev = document.querySelector('.prev'),
    next = document.querySelector('.next'),
    slides = document.querySelectorAll('.mySlides'),
    dots = document.querySelectorAll('.dot');

let index = 0;

const prepareCurrentSlide = (ind) => {
    activeSlide(ind);
    activeDot(ind);
}

const activeSlide = n => {
    for (slide of slides) {
        slide.classList.remove('active')
    }
    slides[n].classList.add('active')
}

const activeDot = n => {
    for (dot of dots) {
        dot.classList.remove('active')
    }
    dots[n].classList.add('active')
}

const nextSlide = () => {
    if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
    } else {
        index++;
        prepareCurrentSlide(index);
    }
}

const prevSlide = () => {
    if (index == 0) {
        index = slides.length - 1;
        prepareCurrentSlide(index);
    } else {
        index--;
        prepareCurrentSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
    });
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

const interval = setInterval(nextSlide, 20000);


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector('' + blockID).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    });
}



