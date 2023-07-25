// slideshow.js
$(document).ready(function() {
    let slideIndex = 0;
    showSlides(slideIndex);

    function showSlides(index) {
        const slides = $('.slide');
        const dots = $('.progress-dot');
        
        if (index >= slides.length) {
            slideIndex = 0;
        } else if (index < 0) {
            slideIndex = slides.length - 1;
        }

        slides.hide();
        dots.removeClass('active');
        $(slides[slideIndex]).fadeIn();
        $(dots[slideIndex]).addClass('active');
    }

    $('.prev').on('click', function() {
        slideIndex--;
        showSlides(slideIndex);
    });

    $('.next').on('click', function() {
        slideIndex++;
        showSlides(slideIndex);
    });
});
