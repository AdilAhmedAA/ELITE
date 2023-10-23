var scrollPosition = window.scrollY;
var header = document.getElementsByClassName('header')[0];
    
window.addEventListener('scroll', function() {

    scrollPosition = window.scrollY;

    if (scrollPosition >= 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

});

var el = document.querySelector('#map-filter');
var listing = document.querySelector('#map-toggle');
el.addEventListener('onclick', function() {
    listing.classList.toggle('active');
  });


