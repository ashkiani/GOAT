$(document).ready(function () {
    console.log("Document Ready!");
    var shoeSizeEl = $("#shoeSize");
    var defaultShoeSize = 10;
    function clearShoeSizeCombo() {
        shoeSizeEl.html("");
    }

    clearUserData();

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
                            return;
                        }
                    }
                });

            }
        }
    }

    // function setUserData(user) {
    //     var goatUsers = [userData];
    //     goatUsers = loadLocalStorage();
    //     if (goatUsers !== null) {


    //     }
    //     else {
    //         goatUsers = [];

    //     }
    //     var userExists = false;
    //     goatUsers.forEach(user => {
    //         if (user !== null) {
    //             console.log("checking user:" & user.email);
    //             if (user.email == userName) {
    //                 //copy the input into the exiting record
    //                 userData.email=user.email;
    //                 userData.name=user.name;
    //                 userData.password=user.password;
    //                 userData.shoeSize=user.shoeSize;

    //                 return;
    //             }
    //         }
    //     });
    // }

    // getUserData("ashkiani@yahoo.com");




    function underConstructionAlert() {
        alert("This unit is under construction");
    }
    function addSize(size) {
        var optEl = $("<option>");
        optEl.html(size);
        optEl.appendTo(shoeSizeEl);
    }

    function initShoeSizeCombo() {
        clearShoeSizeCombo();
        for (var i = 4; i < 13; i = i + 0.5) {
            console.log(i);
            addSize(i);
        }
        addSize(13);
        addSize(14);
        shoeSizeEl.val(defaultShoeSize);
    }
    initShoeSizeCombo();


    $("#btnUpdate").click(function () {
        underConstructionAlert();
    });
    $("#btnCancel").click(function () {
        underConstructionAlert();
    });
});

