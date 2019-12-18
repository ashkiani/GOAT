// nav-bar open/close
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function mySort() {
    document.getElementById("sort").classList.toggle("show");
}

function myFilter() {
    document.getElementById("filter").classList.toggle("show");
}

// END OF NAV BAR

// ON SALE SLIDESHOW

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

// END OF ON SALE SLIDESHOW

$(document).ready(function() {
    // COMING SOON SLIDESHOW
    $("#css3dimagePager li").click(function() {
        var rotateY = $(this).index() * -90;
        $("#css3dimageslider ul").css({
            "-webkit-transform": "rotateY(" + rotateY + "deg)",
            "-moz-transform": "rotateY(" + rotateY + "deg)",
            "-ms-transform": "rotateY(" + rotateY + "deg)",
            transform: "rotateY(" + rotateY + "deg)"
        });
        $("#css3dimagePager li").removeClass("active");
        $(this).addClass("active");
    });
    // END OF ON COMING SOON SLIDESHOW
});