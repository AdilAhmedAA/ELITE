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



document.addEventListener('DOMContentLoaded', function () {
var para = document.getElementById('readmorepara');
var readmore = document.getElementById('readmore');
readmore.addEventListener('click', function() {
    para.classList.toggle('active');
});
});

       

