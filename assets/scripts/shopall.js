//Navbar burger
$(document).ready(function() {
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });
});

// TIMER

function makeTimer() {
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

    $("#days").html(days + " <span>Days</span>");
    $("#hours").html(hours + " <span>Hours</span>");
    $("#minutes").html(minutes + " <span>Minute</span>");
    $("#seconds").html(seconds + " <span>Seconds</span>");
}

setInterval(function() {
    makeTimer();
}, 1000);

// END OF TIMER

//DELETE HOME PAGE NOTIFICATION
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

// JQUERY BEGGINS

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

    //Variable for capturing the user who is logged in
    var loggedInUserName = getLoggedInUserName();

    //If user is not logged in:  HIDE the logout and account buttons - SHOW the login and register buttons
    if (loggedInUserName == "") {
        $("#btnLogOut").hide();
        $("#btnAccount").hide();
        $("#btnLogin").show();
        $("#btnRegister").show();
    }
    //If user is logged in:  SHOW the logout and account buttons - HIDE the login and register buttons
    else {
        $("#btnLogOut").show();
        $("#btnAccount").show();
        $("#btnLogin").hide();
        $("#btnRegister").hide();
    }

    //====================Adding items to the cart

    function addToCart(title, price, image) {
        var currentCart = getCart();
        var item = {
            title: title,
            price: price,
            image: image
        };

        currentCart.push(item);
        setCart(currentCart);
    }

    $(".cart").click(function() {
        var parentEl = $(this).parent();
        var priceEl = parentEl.find(".price").eq(0);
        var imgEl = parentEl.find("img").eq(0);
        var titleEl = parentEl.find(".sport-title").eq(0);
        addToCart(titleEl.text(), priceEl.text(), imgEl.attr("src"));
    });
    //====================Adding items to the cart - end

    // END OF DOCUMENT READY
});