var creditCardData = {
    "creditCard": { "number": "", "name": "", "expiration": "" }
};
var cartData = [];

var userData = {
    "email": "",
    "name": "",
    "password": "",
    "shoeSize": "",
    "address": "",
    "creditCard": creditCardData,
    "cart": cartData
};

var currentUser = "";
function clearUserData(){
    userData.email="";
    userData.name="";
    userData.password="";
    userData.shoeSize="";
    userData.address="";
    userData.creditCard.number="";
    userData.creditCard.name="";
    userData.creditCard.expiration="";
    cart=[];
    console.log("Cleared current user");
}