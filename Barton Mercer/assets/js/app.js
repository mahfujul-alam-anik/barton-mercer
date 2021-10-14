$(document).ready(function () {
  //testimonial carousel js
  $('#testimonial-slider').owlCarousel({
    items: 1,
    itemsDesktop: [1000, 1],
    itemsDesktopSmall: [979, 1],
    itemsTablet: [768, 1],
    margin: 10,
    pagination: false,
    navigation: true,
    navigationText: ['<i class="fas fa-arrow-left"></i>', '<i class="fas fa-arrow-right"></i>'],
    autoPlay: true,
  });

  //counter up js
  $('.counter-box-title').counterUp({
    time: 1000,
    delay: 20,
  });
});

window.onscroll = function () {
  stickyTop();
  handleActive();
};

//navber sticky top
const navbar = document.getElementById('navbar');
const sticky = navbar.offsetTop;
function stickyTop() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add('stickyTop');
  } else {
    navbar.classList.remove('stickyTop');
  }
}

//active menu control
const testimonial = document.getElementById('testimonial');
const testimonial_navlink = document.querySelector('.testimonial-navlink');
function handleActive() {
  if (
    window.pageYOffset > testimonial.offsetTop &&
    window.pageYOffset < testimonial.offsetTop + testimonial.clientHeight
  ) {
    testimonial_navlink.classList.add('active');
    document.querySelector('.home-navlink').classList.remove('active');
  } else {
    testimonial_navlink.classList.remove('active');
    document.querySelector('.home-navlink').classList.add('active');
  }
}
