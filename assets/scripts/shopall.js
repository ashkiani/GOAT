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

//Delete home page notification
document.addEventListener("DOMContentLoaded", () => {
    (document.querySelectorAll(".notification .delete") || []).forEach(
        $delete => {
            $notification = $delete.parentNode;
            $delete.addEventListener("click", () => {
                $notification.parentNode.removeChild($($notification).fadeOut(500));
            });
        }
    );
});

// SHOW FILTER

function filter() {
    var div = document.getElementById("filterDIV");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

// SORT BY

function sort() {
    var y = document.getElementById("sortDIV");
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
}

$(document).ready(function() {
    // LATEST FASHION
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
    // END OF LATEST FASHION
});