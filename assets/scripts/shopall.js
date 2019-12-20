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

    // CELEBS GALLERY

    $(".img-wrapper").hover(
        function() {
            $(this)
                .find(".img-overlay")
                .animate({ opacity: 1 }, 600);
        },
        function() {
            $(this)
                .find(".img-overlay")
                .animate({ opacity: 0 }, 600);
        }
    );

    var $overlay = $('<div id="overlay"></div>');
    var $image = $("<img>");
    var $prevButton = $(
        '<div id="prevButton"><i class="fa fa-chevron-left"></i></div>'
    );
    var $nextButton = $(
        '<div id="nextButton"><i class="fa fa-chevron-right"></i></div>'
    );
    var $exitButton = $('<div id="exitButton"><i class="fa fa-times"></i></div>');

    $overlay.hide();

    $(".img-overlay").click(function(event) {
        event.preventDefault();
        var imageLocation = $(this)
            .prev()
            .attr("href");
        $image.attr("src", imageLocation);
        $overlay.fadeIn("slow");
    });

    $overlay.click(function() {
        $(this).fadeOut("slow");
    });

    var gallery = document.querySelector("#gallery");
    var getVal = function(elem, style) {
        return parseInt(window.getComputedStyle(elem).getPropertyValue(style));
    };
    var getHeight = function(item) {
        return item.querySelector(".content").getBoundingClientRect().height;
    };
    var resizeAll = function() {
        var altura = getVal(gallery, "grid-auto-rows");
        var gap = getVal(gallery, "grid-row-gap");
        gallery.querySelectorAll(".gallery-item").forEach(function(item) {
            var el = item;
            el.style.gridRowEnd =
                "span " + Math.ceil((getHeight(item) + gap) / (altura + gap));
        });
    };
    gallery.querySelectorAll("img").forEach(function(item) {
        item.classList.add("byebye");
        if (item.complete) {
            console.log(item.src);
        } else {
            item.addEventListener("load", function() {
                var altura = getVal(gallery, "grid-auto-rows");
                var gap = getVal(gallery, "grid-row-gap");
                var gitem = item.parentElement.parentElement;
                gitem.style.gridRowEnd =
                    "span " + Math.ceil((getHeight(gitem) + gap) / (altura + gap));
                item.classList.remove("byebye");
            });
        }
    });
    window.addEventListener("resize", resizeAll);
    gallery.querySelectorAll(".gallery-item").forEach(function(item) {
        item.addEventListener("click", function() {
            item.classList.toggle("full");
        });
    });

    // END OF CELEBS GALLERY

    // MODAL

    //Modal for clicking sneaker of the day
    $("#sneaker-of-day").click(function() {
        $(".sneakerOfDayModal").addClass("is-active");
    });

    $(".modal-close").click(function() {
        $(".sneakerOfDayModal").removeClass("is-active");
    });
});