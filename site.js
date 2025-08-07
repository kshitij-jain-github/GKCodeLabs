
// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on('click', function (event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 700, function () {
        window.location.hash = hash;
      });
    }
  });
});

// navbar toggle
$('#nav-toggle').click(function () {
  $(this).toggleClass('is-active')
  $('ul.nav').toggleClass('show');
});



// Testimonials carousel
$(".testimonial-carousel").owlCarousel({
  autoplay: true,
  smartSpeed: 1000,
  items: 1,
  dots: true,
  loop: true,
});




    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
      var typed_strings = $('.typed-text').text();
      var typed = new Typed('.typed-text-output', {
          strings: typed_strings.split(', '),
          typeSpeed: 100,
          backSpeed: 20,
          smartBackspace: false,
          loop: true
      });
  }

  /**
   * Frequently Asked Questions Toggle
   */document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const item = trigger.closest('.faq-item');
    item.classList.toggle('faq-active');
  });
});


//   aos animation

AOS.init();

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.counter');
  const options = { threshold: 1.0 };

  const startCount = (entry) => {
    const el = entry.target;
    const endVal = parseInt(el.getAttribute("data-count"));
    const counter = new CountUp(el, endVal);
    if (!counter.error) {
      counter.start();
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCount(entry);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  counters.forEach(counter => observer.observe(counter));
});

// loader
window.addEventListener('load', function () {
  const loader = document.querySelector('.loader-wrapper');
  loader.style.opacity = '0';
  loader.style.transition = 'opacity 0.5s ease';

  setTimeout(() => {
    loader.style.display = 'none';
  }, 500);
});

