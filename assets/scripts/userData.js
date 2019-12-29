// Siavash - 12/26/2019
// Refactored the existing code to generate userDataObject by a function
function generateBlankUserDataObject() {
    // Siavash - 12/21/2019
    // This object stores the CC information.
    var creditCardData = {
        "creditCard": { "number": "", "name": "", "expiration": "" }
    };

    // Siavash - 12/21/2019
    // This array houses the item IDs in the cart.
    var cartData = [];

    var userDataObject = {
        "email": "",
        "name": "",
        "password": "",
        "shoeSize": "",
        "address": "",
        "creditCard": creditCardData,
        "cart": cartData
    };
    return userDataObject;
}

// Siavash - 12/26/2019
// returns True if any user is currently logged in, False otherwise.
function isLoggedIn() {
    var result = false;
    var userName = getLoggedInUserName();
    if (currentUser != "") {
        result = true;
    }
    return result;
}

// Siavash - 12/21/2019
// This function looks for a goatUsers key in the local storage and returns its value. The value is an array of userData.
// it will return null if nothing is found.
function getGoatUsersFromLocalStorage() {
    var goatUsers = [];
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
    var userData = generateBlankUserDataObject();
    userName = userName.trim();
    if (userName != "") {
        var goatUsers = [userData];
        goatUsers = getGoatUsersFromLocalStorage();
        if (goatUsers !== null) {
            goatUsers.forEach(user => {
                if (user !== null) {
                    console.log("checking user:" & user.email);
                    if (user.email == userName) {
                        userData = user;
                        currentUser = userName;
                        return userData;
                    }
                }
            });

        }
    }
    return userData;
}

// Siavash - 12/26/2019 
// returns True if the input is anystring@anystring.anystring, False otherwise
// Got the code from: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Siavash - 12/26/2019 
// returns True if the input name is unique, False otherwise.
function isUserNameUnique(userName) {
    result = false;
    if (userName == currentUser) {
        result = true;
    }
    else {
        result = true;
        var goatUsers = [];
        goatUsers = getGoatUsersFromLocalStorage();
        if (goatUsers !== null) {
            goatUsers.forEach(user => {
                if (user !== null) {
                    if (result) {
                        if (user.email == userName) {
                            //user already exists!
                            result = false;
                            return result;
                        }
                    }

                }
            });

        }
    }
    return result;
}

//Siavash 12/28/2019 
//Returns True is password requirements are met (at this time we only check the length)
function isPasswordValid(password) {
    var result = false;
    password = password.trim();
    if (password.length > 3) {
        result = true;
    }
    return result;
}

// Siavash - 12/26/2019 
// returns an array that lists the errors for the input object. if the array length is 0 then that means the input object is valid.
function getUserDataObjectErrors(userDataObject) {
    errors = [];
    if (validateEmail(userDataObject.email)) {
        //no error so far... next, check if the userName is duplicate
        if (isUserNameUnique(userDataObject.email)) {
            // email address is valid
        }
        else {
            //duplicate email
            errors.push("The email address already exists!");
        }
    } else {
        //invalid email format
        errors.push("Invalid email address. The email format should be string@string.string");
    }

    if (!isPasswordValid(userDataObject.password)) {
        errors.push("Invalid Password. Password length should be at least 4 characters.");
    }
    // no more validation checks at this time, but this is the place to add additional validation rules if needed...

    return errors;
}

// Siavash - 12/26/2019 
// returns an array that lists the errors for the shared userData object. if the array length is 0 then that means the input object is valid.
function getUserDataErrors() {
    return getUserDataObjectErrors(userData);
}

// Siavash - 12/26/2019 
// returns True if the input object is valid, False otherwise.
function isUserDataObjectValid(userDataObject) {
    var errors = getUserDataObjectErrors(userDataObject);
    return (errors.length == 0);
}

// Siavash - 12/26/2019 
// returns True if the shared userData object is valid, False otherwise.
function isUserDataValid() {
    var errors = getUserDataErrors();
    return (errors.length == 0);
}

// Siavash - 12/21/2019
// This function saves the input userDataObject into the local storage.
// It will create a new entry in the local storage if the username doesn't exist, otherwise it will update the existing object/user
function setUserData(userDataObject) {
    if (isUserDataObjectValid(userDataObject)) {
        var goatUsers = [];
        goatUsers = getGoatUsersFromLocalStorage();
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
    else {
        console.log("Invalid User data");
    }
}

//Siavash 12/28/2019 
//Returns the goatLoggedInUser variable from the local storage
function getLoggedInUserName() {
    var value = localStorage.getItem("goatLoggedInUser");
    if (value !== null) {

    }
    else {
        value = "";
    }
    return value;
}

//Siavash 12/28/2019 
//Returns the userData object related to the currently logged in user. if no user is logged in a blank object is returned.
function getCurrentUserData() {
    var currentUser = getLoggedInUserName();
    console.log("Current User:" + currentUser);
    var userData = getUserData(currentUser);
    return userData;
}

//Siavash 12/28/2019 
//Sets the goatLoggedInUser variable in the local storage
function setLoggedInUserName(userName) {
    localStorage.setItem("goatLoggedInUser", userName);
}

//Siavash 12/28/2019 
//Clears the goatLoggedInUser variable in the local storage
function userLogOff() {
    setLoggedInUserName("");
}

