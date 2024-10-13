document.addEventListener('DOMContentLoaded', function() {
    const texts = ['Anupriya'];
    let count = 0;
    let index = 0;
    let currentText = '';
    let letter = '';

    (function type() {
        if (count === texts.length) {
            count = 0;
        }
        currentText = texts[count];
        letter = currentText.slice(0, ++index);

        document.getElementById('typed-text').textContent = letter;
        if (letter.length === currentText.length) {
            count++;
            index = 0;
            setTimeout(type, 2000); // Wait for 2 seconds before starting over
        } else {
            setTimeout(type, 100); // Typing speed
        }
    })();
});

document.querySelectorAll('#side-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active section in navigation
window.addEventListener('scroll', () => {
    let scrollPosition = window.scrollY;

    document.querySelectorAll('section').forEach(section => {
        if (scrollPosition >= section.offsetTop - 200 && scrollPosition < section.offsetTop + section.offsetHeight - 200) {
            document.querySelectorAll('#side-nav a').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').substring(1) === section.id) {
                    link.classList.add('active');
                }
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.projects-carousel');
    const prevButton = document.querySelector('.carousel-nav .prev');
    const nextButton = document.querySelector('.carousel-nav .next');

    prevButton.addEventListener('click', () => {
        carousel.scrollBy({ left: -carousel.offsetWidth, behavior: 'smooth' });
    });

    nextButton.addEventListener('click', () => {
        carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
    });
});
