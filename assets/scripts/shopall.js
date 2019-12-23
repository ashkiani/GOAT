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

    // MODAL FOR SHOP ALL

    $(".page-title").click(function() {
        $("#allKicks").show(1000);
    });

    // FILTER TROUGH MEN,WOMEN,CASUAL,SPORT

    // MENS FILTER

    $("#men").click(function() {
        $("#manKicks").show(1000);
        $("#sportKicks").hide();
        $("#casualKicks").hide();
        $("#womenKicks").hide();
        $("#upcomingKicks").hide();
        $("#popularKicks").hide();
        $("#arrivalsKicks").hide();
        // targe link
        $("#link").remove();
        $("#sportKicksHR").remove();
        $("#casualKicksHR").remove();
        $("#womenKicksHR").remove();
    });

    // WOMENS FILTER

    $("#women").click(function() {
        $("#womenKicks").show(1000);
        $("#sportKicks").hide();
        $("#casualKicks").hide();
        $("#manKicks").hide();
        $("#upcomingKicks").hide();
        $("#popularKicks").hide();
        $("#arrivalsKicks").hide();
        // target link
        $("#link").remove();
        $("#sportKicksHR").remove();
        $("#casualKicksHR").remove();
        $("#manKicksHR").remove();
    });

    // SPORT KICKS FILTER

    $("#sportKick").click(function() {
        $("#sportKicks").show(1000);
        $("#manKicks").hide();
        $("#casualKicks").hide();
        $("#womenKicks").hide();
        $("#upcomingKicks").hide();
        $("#popularKicks").hide();
        $("#arrivalsKicks").hide();
        // target link
        $("#link").remove();
        $("#manKicksHR").remove();
        $("#casualKicksHR").remove();
        $("#womenKicksHR").remove();
    });

    // CASUAL FILTER

    $("#casual").click(function() {
        $("#casualKicks").show(1000);
        $("#manKicks").hide();
        $("#sportKicks").hide();
        $("#womenKicks").hide();
        $("#upcomingKicks").hide();
        $("#popularKicks").hide();
        $("#arrivalsKicks").hide();
        // target link
        $("#link").remove();
        $("#sportKicksHR").remove();
        $("#menKicksHR").remove();
        $("#womenKicksHR").remove();
    });

    //  FILTER TROUGH UPCOMING,POPULAR,ARRIVALS

    // UPCOMING FILTER
    $("#upcoming").click(function() {
        $("#upcomingKicks").show(1000);
        $("#manKicks").hide();
        $("#sportKicks").hide();
        $("#womenKicks").hide();
        $("#casualKicks").hide();
        $("#popularKicks").hide();
        $("#arrivalsKicks").hide();
        // target link
        $("#link").remove();
        $("#sportKicksHR").remove();
        $("#menKicksHR").remove();
        $("#womenKicksHR").remove();
    });

    // POPULAR FILTER

    $("#popular").click(function() {
        $("#popularKicks").show(1000);
        $("#manKicks").hide();
        $("#sportKicks").hide();
        $("#womenKicks").hide();
        $("#casualKicks").hide();
        $("#upcomingKicks").hide();
        $("#arrivalsKicks").hide();
        // target link
        $("#link").remove();
        $("#sportKicksHR").remove();
        $("#menKicksHR").remove();
        $("#womenKicksHR").remove();
    });

    // ARRIVALS FILTER
    $("#arrivals").click(function() {
        $("#arrivalsKicks").show(1000);
        $("#manKicks").hide();
        $("#sportKicks").hide();
        $("#womenKicks").hide();
        $("#casualKicks").hide();
        $("#popularKicks").hide();
        $("#upcomingKicks").hide();
        // target link
        $("#link").remove();
        $("#sportKicksHR").remove();
        $("#menKicksHR").remove();
        $("#womenKicksHR").remove();
    });

    // END OF DOCUMENT READY
});