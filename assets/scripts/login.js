//Siavash 1/3/2020 Created this file to move some of the code from main.js
$(document).ready(function () {
    //Siavash 12/28/2019
    //Added this function to handle the Login Failed condition
    function loginFailed() {
        //Add your code here to inform user about the Login Failure.
        console.log("loginFailed");
        //Siavash 1/3/2020 Added the following LOC to show the error.
        $("#errorText").html("Invalid username or password!");
    }

    $("#btnLogin").click(function () {
        var userName = $("#username").val();
        var userData = getUserData(userName);
        console.log(userData);
        if (userData.email == "") {
            loginFailed();
        }
        else {
            //Siavash 12/28/2019
            //now check the password
            var psw = $("#password").val();
            if (psw == userData.password) {
                userLogIn(userData);
            }
            else {
                loginFailed();
            }
        }
    });

});
