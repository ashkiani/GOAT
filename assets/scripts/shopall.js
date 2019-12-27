// TIMER FOR COUPON

function makeTimer() {
    //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
    var endTime = new Date("29 April 2020 9:56:00 GMT+01:00");
    endTime = Date.parse(endTime) / 1000;

    var now = new Date();
    now = Date.parse(now) / 1000;

    var timeLeft = endTime - now;

    var days = Math.floor(timeLeft / 86400);
    var hours = Math.floor((timeLeft - days * 86400) / 3600);
    var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
    var seconds = Math.floor(
        timeLeft - days * 86400 - hours * 3600 - minutes * 60
    );

    if (hours < "10") {
        hours = "0" + hours;
    }
    if (minutes < "10") {
        minutes = "0" + minutes;
    }
    if (seconds < "10") {
        seconds = "0" + seconds;
    }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");
}

setInterval(function() {
    makeTimer();
}, 1000);

// END OF TIMER FOR COUPON

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
        $("#arrivalsKicks").show(1000);
        $("#manKicks").show(1000);
        $("#sportKicks").show(1000);
        $("#womenKicks").show(1000);
        $("#casualKicks").show(1000);
        $("#popularKicks").show(1000);
        $("#upcomingKicks").show(1000);
        // target link
        $("#link").remove();
        $("#sportKicksHR").remove();
        $("#menKicksHR").remove();
        $("#womenKicksHR").remove();
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