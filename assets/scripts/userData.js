// Siavash - 12/21/2019
// This object stores the CC information.
var creditCardData = {
    "creditCard": { "number": "", "name": "", "expiration": "" }
};

// Siavash - 12/21/2019
// This array houses the item IDs in the cart.
var cartData = [];

// Siavash - 12/21/2019
// This object represents the current logged-in user
var userData = {
    "email": "",
    "name": "",
    "password": "",
    "shoeSize": "",
    "address": "",
    "creditCard": creditCardData,
    "cart": cartData
};

// Siavash - 12/26/2019
// returns True if any user is currently logged in, False otherwise.
function isLoggedIn(){
    var result = false;
    if (currentUser!=""){
        result=true;
    }
    return result;
}


// Siavash - 12/21/2019
// use this variable to store the username of the current user.
var currentUser = "";
function clearUserData() {
    userData.email = "";
    userData.name = "";
    userData.password = "";
    userData.shoeSize = "";
    userData.address = "";
    userData.creditCard.number = "";
    userData.creditCard.name = "";
    userData.creditCard.expiration = "";
    cart = [];
    currentUser = "";
    console.log("Cleared current user");
}

// Siavash - 12/21/2019
// This function looks for a goatUsers key in the local storage and returns its value. The value is an array of userData.
// it will return null if nothing is found.
function loadLocalStorage() {
    var goatUsers = [userData];
    var value = localStorage.getItem("goatUsers");
    if (value !== null) {
        console.log(value);
        goatUsers = JSON.parse(value);
    }
    else {
        console.log("No users in the local storage.");
        goatUsers = null;
    }
    return goatUsers;
}

// Siavash - 12/21/2019
// This function looks for the input username in the local storage and if found, then it will copy the value into the userData variable
// at this time it doesn't return any value since I thought userData object will be shared with other pages but we change that if we need an explicit return object.
function getUserData(userName) {
    userName = userName.trim();
    if (userName != "") {
        var goatUsers = [userData];
        goatUsers = loadLocalStorage();
        if (goatUsers !== null) {
            goatUsers.forEach(user => {
                if (user !== null) {
                    console.log("checking user:" & user.email);
                    if (user.email == userName) {
                        userData = user;
                        currentUser = userName;
                        return;
                    }
                }
            });

        }
    }
}


// Siavash - 12/21/2019
// This function saves the input userDataObject into the local storage.
// It will create a new entry in the local storage if the username doesn't exist, otherwise it will update the existing object/user
function setUserData(userDataObject) {
    var goatUsers = [userData];
    goatUsers = loadLocalStorage();
    console.log("users:" + goatUsers);
    if (goatUsers !== null) {
        var userExists = false;
        goatUsers.forEach(user => {
            if (user !== null) {
                console.log("checking user:" & user.email);
                if (user.email == userDataObject.email) {
                    //copy the input into the exiting record
                    user.email = userDataObject.email;
                    user.name = userDataObject.name;
                    user.password = userDataObject.password;
                    user.shoeSize = userDataObject.shoeSize;
                    user.creditCard = userDataObject.creditCard;
                    user.cart = userDataObject.cart;
                    userExists = true;
                    return;
                }
            }
        });
        if (!userExists) {
            goatUsers.push(userDataObject);
        }
    }
    else {
        goatUsers = [];
        goatUsers.push(userDataObject);
    }
    localStorage.setItem("goatUsers", JSON.stringify(goatUsers));
}
