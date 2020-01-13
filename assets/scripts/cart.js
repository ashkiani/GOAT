var loggedInUserName = getLoggedInUserName();

//Siavash 1/4/2020 Added the following line to make sure the page is ready.
$(document).ready(function () {
    
// Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");

    });

    //If user is not logged in:  HIDE the logout and account buttons - SHOW the login and register buttons
    if(loggedInUserName == ""){
        $("#btnLogOut").hide();
        $("#btnAccount").hide();
        $("#btnLogin").show();
        $("#btnRegister").show();
    }
    //If user is logged in:  SHOW the logout and account buttons - HIDE the login and register buttons
    else{
        $("#btnLogOut").show();
        $("#btnAccount").show();
        $("#btnLogin").hide();
        $("#btnRegister").hide();
    }

    // My Cart/Empty/ Total Price Display 
    // var priceEl = $('.price');
    var empty = $(".empty");
    // Shoe Display Div 
    var mainDivEL = $('.mainDiv');
    // Display div elements 
    var priceDisplayEl = $('.price-display');
    // Price Display Div
    var subtotalEl = $('.price-subtotal');
    var priceItems = $('.price-items');
    var estimatedTotal = $('.estimated-total');
    var cart = []; //Siavash 1/4/2020 Defined cart as a global variable so we don't have to load it again in the click event
    var sum = 0;

    //Siavash 1/8/2020 Add this function to load the Cart items
    function loadCart() {
        //Siavash 1/4/2020 Added the following line to clear the page first.
        mainDivEL.html("");
        cart = getCart();
        priceItems.text(cart.length);
        // Dynamic Shoe display dive 
        if (cart.length > 0) {
            for (var i = 0; i < cart.length; i++) {
                var divOne = $("<div>");
                divOne.attr("class", 'columns firstDiv');
                divOne.attr("data-index", i);
                mainDivEL.append(divOne);

                var divTwo = $('<div>');
                divTwo.attr('class', "column is-one-third shoe-pic-div");
                divOne.append(divTwo);
                var shoeImg = $("<img>");
                shoeImg.attr("src", cart[i].image);
                divTwo.append(shoeImg);

                var divThree = $("<div>");
                divThree.attr('class', 'column shoe-desc-div');
                divOne.append(divThree);
                var shoeName = $('<p>');
                shoeName.text(cart[i].title);
                divThree.append(shoeName);

                var shoePrice = $("<p>");
                var price = cart[i].price;
                if (price.indexOf(' ') >= 0) {
                    var prices = price.split(" ");
                    price = prices[0] + "(Original) - Reduced to: " + prices[1];
                }

                shoePrice.text("Price " + price);
                divThree.append(shoePrice);
                var removeButton = $('<button>');
                removeButton.text('Remove');
                removeButton.attr('button is-small');
                divThree.append(removeButton);
            }
            priceDisplayEl.css("display", "block");
            // priceEl.css("display", "block");
            console.log(cart.length);
        } else {
            empty.css("display", "block");
        }
    }

    //Siavash 1/8/2020 Add this function to load the Total div
    function loadTotal() {
        sum = 0;
        for (i = 0; i < cart.length; i++) {
            var price = cart[i].price;
            if (price.indexOf(' ') >= 0) {
                var prices = price.split(" ");
                price = prices[1];
            }

            price=price.replace(",","");
            console.log("price:" + price);
            sum += parseInt(price.substr(1));
            console.log("sum:" + sum);
        }
        subtotalEl.text(sum);
        estimatedTotal.text(sum);
    }

    //Siavash 1/4/2020 Added the following function to load the page.
    function loadPage() {
        loadCart();
        loadTotal();
    }

    //Siavash 1/4/2020 Added the following line to load the page when it is first opened.
    loadPage();

    // remove button function 
    mainDivEL.on('click', function (event) {
        var element = event.target;
        if (element.matches('button') === true) {
            console.log("button was pushed");
            var index = element.parentElement.parentElement.getAttribute("data-index");
            console.log(index);
            //Siavash 1/4/2020 Added the following lines to remove the item from the cart and reload the page
            cart.splice(index, 1);
            setCart(cart);
            loadPage();
            if(promoText == "GOAT2019NIKE"){
                var discount = sum * 0.20;
                $('.price-discount').text("$" + discount);
                //Siavash 1/8/2020 Added to populate the estimated total
                if (discount > 0) {
                    estimatedTotal.text("$" + (sum - discount));
                }
            }
            if(cart.length == 0){
                priceDisplayEl.css("display", "none");
            }
        }
    });
    
        var promoText = $(".promo-code").val();
        $("form").submit(function (event) {
            event.preventDefault();
            promoText = $(".promo-code").val();
            if (promoText == "GOAT2019NIKE") {
                var discount = sum * 0.20;
                $('.price-discount').text("$" + discount);
                //Siavash 1/8/2020 Added to populate the estimated total
                if (discount > 0) {
                    estimatedTotal.text("$" + (sum - discount));
                }
            }
        });

// Marvin out function 
    //Logout button click event - logs the user out and redirects user to the login page
$("#btnLogOut").click(function(){
    localStorage.removeItem("goatLoggedInUser");
    window.location.href = "home.html";
})
});
