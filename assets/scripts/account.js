$(document).ready(function () {
    console.log("Document Ready!");
    var shoeSizeEl = $("#shoeSize");
    var defaultShoeSize = 10;
    function clearShoeSizeCombo() {
        shoeSizeEl.html("");
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


    // clearUserData();

    var nameEl = $("#nameText");
    var emailEl = $("#emailText");
    var passwordEl = $("#passwordText");
    //shoeSizeEl
    var addressEl = $("#addressText");
    var ccNumberEl = $("#ccNumberText");
    var ccNameEl = $("#ccNameText");
    var ccExpEl = $("#ccExpText");
    var userData = generateBlankUserDataObject();


    function updateUserDataObjectFromPage() {
        userData.name = nameEl.val();
        userData.email = emailEl.val();
        userData.password = passwordEl.val();
        userData.shoeSize = shoeSizeEl.val();
        userData.address = addressEl.html();
        userData.creditCard.number = ccNumberEl.val();
        userData.creditCard.name = ccNameEl.val();
        userData.creditCard.expiration = ccExpEl.val();
    }
    function loadPageFromUserDataObject() {
        nameEl.val(userData.name);
        emailEl.val(userData.email);
        passwordEl.val(userData.password);
        shoeSizeEl.val(userData.shoeSize);
        addressEl.html(userData.address);
        ccNumberEl.val(userData.creditCard.number);
        ccNameEl.val(userData.creditCard.name);
        ccExpEl.val(userData.creditCard.expiration);
    }

    //ccExpDiv
    //ccNameDiv
    //ccNumberDiv
    //addressDiv
    //passwordDiv
    //emailDiv
    //nameDiv
    //id="nameText"
    //id="emailText"
    //id="passwordText"
    //shoeSize
    //id="addressText" html
    //id="ccNumberText"
    //id="ccNameText"
    //id="ccExpText"


    //test data
    // userData.email = "abcd@yahoo.com";
    // userData.name = "Siavash";

    // userData.password = "SomePassword";
    // userData.shoeSize = 10.5;
    // userData.address = "some text for address";
    // userData.creditCard.number = "123456"
    // userData.creditCard.name = "someone elses cc"
    // userData.creditCard.expiration = "1111"
    // loadPageFromUserDataObject();


    // setUserData(userData);
    // getUserData("ashkiani@yahoo.com");
    // $("#emailText").val(userData.email);
    var currentUser = getLoggedInUserName();
    if (currentUser != "") {
        userData = getUserData(currentUser);
        console.log(userData);
        loadPageFromUserDataObject();
    }





    function underConstructionAlert() {
        alert("This unit is under construction");
    }
    function addSize(size) {
        var optEl = $("<option>");
        optEl.html(size);
        optEl.appendTo(shoeSizeEl);
    }



    $("#btnUpdate").click(function () {
        // updateUserDataObjectFromPage();
        // setUserData(userData);
        underConstructionAlert();
    });
    $("#btnCancel").click(function () {
        underConstructionAlert();
    });
});

