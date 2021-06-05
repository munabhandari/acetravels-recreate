

// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar
var navbar = document.getElementById("top-header");

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= 100) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// Scroll top function with smooth transition
var gotoTopIcon = document.querySelector('#goto-top-icon');
gotoTopIcon.addEventListener('click', function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
});


// review-slider done using owlCarousel 
$(document).ready(function () {
    $(".review-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplaySpeed: 500,
        autoplayTimeout: 3000,
        nav: true,
        autoplay: true
    });

    // image-slider done using owlCarousel 
    $(".image-slider").owlCarousel({
        items: (screen.width < 1224 ? 1 : 3),
        loop: true,
        autoplaySpeed: 500,
        autoplayTimeout: 3000,
        nav: true,
        autoplay: true
    });

    $(".burger-menu").click(function(){
        $('.menu').toggle();
    })
    
    $(".has-submenu").click(function(){
        $(this).find('.submenu').toggle();
    })

});
