//Siavash 1/3/2020 Created this file to move some of the code from main.js
$(document).ready(function () {
    // Siavash 12/27/2019
    // Updated the SignUp click function to validate the entered data before the save operation. 
    $("#btnSignUp").click(function () {
        var userDataObject = generateBlankUserDataObject();
        userDataObject.email = $("#userName").val();
        userDataObject.password = $("#password").val();
        var errors = getUserDataObjectErrors(userDataObject);
        if (errors.length > 0) {
            // Siavash 12/27/2019
            // Add your code here to show the content of errors to the user.
            // Siavash 1/3/2020 Added the following LOC to show the error.
            $("#errorText").html(errors[0]);
            // The For loop below is an example of how to print the errors in the console. 
            for (var i = 0; i < errors.length; i++) {
                console.log("Error " + (i + 1) + ": " + errors[i]);
            }
        }
        else {
            userLogIn(userDataObject);
        }

    });

});