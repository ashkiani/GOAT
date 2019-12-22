// display div elements 
var shoeDescEl = $('.shoe-desc-div')
var shoePicEl = $('.shoe-pic-div');
var priceDisplayEl = $('.price-display');
//shoe description elements
var priceEl = $('.price');
var shoeNameEl = $('.shoe-name');
var shoeSizeEl = $('.shoe-size');
var shoeQuantityEl = $('.shoe-quantity');
var shoePriceEl = $('.shoe-price');
// shoe price elements 
var subtotalEl = $('.price-subtotal');
var priceItems = $('.price-items');
// MAke Price discount a Button 
var estimatedTotal = $('.estimated-total');

if (userData.cart.length > 0 ){
    for (var i=0; i < userData.cart.length; i++){
    }
}else{
    priceEl.css("display","block");
    shoePicEl.css("display","block");
    shoeDescEl.css("display","block");
    priceDisplayEl.css("display","block");
    alert('Test');
}

// userData.email==""
// if user email is empty no one is logged in if string is full some is 
// is logged in 