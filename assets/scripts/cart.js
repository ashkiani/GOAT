// My Cart/Empty/ Total Price Display 
var priceEl = $('.price');
var empty = $(".empty");
// Shoe Display Div 
var mainDivEL = $('.mainDiv');
// Display div elements 
var priceDisplayEl = $('.price-display');
// Price Display Div
var subtotalEl = $('.price-subtotal');
var priceItems = $('.price-items');
var estimatedTotal = $('.estimated-total');

var cart = getCart();

// Dynamic Shoe display dive 
if (cart.length > 0 ){
    for (var i=0; i < cart.length; i++){
        var divOne = $("<div>");
        divOne.attr("class",'columns firstDiv');
        divOne.attr("data-index", i);
        mainDivEL.append(divOne);
        
        var divTwo = $('<div>');
        divTwo.attr('class',"column is-one-third shoe-pic-div");
        divOne.append(divTwo);
        var shoeImg = $("<img>");
        shoeImg.attr("src",cart[i].image);
        divTwo.append(shoeImg);

        var divThree = $("<div>");
        divThree.attr('class','column shoe-desc-div');
        divOne.append(divThree);
        var shoeName = $('<p>');
        shoeName.text(cart[i].title);
        divThree.append(shoeName);
        // add shoe size <p>
        // add shoe QTY <p>
        var shoePrice = $("<p>");
        shoePrice.text("Price " + cart[i].price);
        divThree.append(shoePrice);
        var removeButton = $('<button>');
        removeButton.text('Remove');
        removeButton.attr('button is-small');
        divThree.append(removeButton);
    }
    priceDisplayEl.css("display","block");
    priceEl.css("display","block");
    console.log(cart.length);
}else{
    empty.css("display","block");
}

// remove button function 
mainDivEL.on('click', function(event){
    var element = event.target;
    if (element.matches('button') === true ){
        console.log("button was pushed");
        var index = element.parentElement.parentElement.getAttribute("data-index");
        console.log(index);
        cart.remove(index);
        // delete cart[index];
    }
}
);


// todoList.addEventListener("click", function(event) {
//     var element = event.target;
  
//     // If that element is a button...
//     if (element.matches("button") === true) {
//       // Get its data-index value and remove the todo element from the list
//       var index = element.parentElement.getAttribute("data-index");
//       todos.splice(index, 1);
  
//       // Re-render the list
//       renderTodos();
//     }
//   }

// Price Display Div 
priceItems.text(cart.length);
// Test
console.log(cart);
// userData.email==""
// if user email is empty no one is logged in if string is full some is 
// is logged in 