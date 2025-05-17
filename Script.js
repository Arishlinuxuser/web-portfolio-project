document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector('#menu-icon');
  const icon = hamburger.querySelector('i'); // get the <i> tag
  const dropdown = document.querySelector('.nav_dropdown');

  hamburger.addEventListener('click', () => {
    dropdown.classList.toggle('active');

    // Toggle hamburger icon
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });
});

const faders = document.querySelectorAll('.education_item');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("fade-in");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});