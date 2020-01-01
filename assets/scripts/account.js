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

    var nameEl = $("#nameText");
    var emailEl = $("#emailText");
    var emailIconEl = $("#emailValIcon");
    var emailErrorEl = $("#emailError");
    var passwordEl = $("#passwordText");
    //shoeSizeEl
    var addressEl = $("#addressText");
    var ccNumberEl = $("#ccNumberText");
    var ccNameEl = $("#ccNameText");
    var ccExpEl = $("#ccExpText");
    var userData = getCurrentUserData();
    console.log("Printing userData:");
    console.log(userData);
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

    loadPageFromUserDataObject();

    function underConstructionAlert() {
        alert("This unit is under construction");
    }
    function addSize(size) {
        var optEl = $("<option>");
        optEl.html(size);
        optEl.appendTo(shoeSizeEl);
    }

    $("#btnUpdate").click(function () {
        var errors = getEmailErrors(emailEl.val());
        emailIconEl.html("");
        emailErrorEl.text("");
        var icon = $("<i>");
        var iconClass = "fas fa-";
        var txtClass = "input is-";
        if (errors.length > 0) {
            //show errors
            iconClass += "exclamation-triangle";
            emailErrorEl.text(errors[0]);
            txtClass += "danger";
        }
        else {
            iconClass += "check";
            txtClass += "success";
        }

        icon.addClass(iconClass);
        emailIconEl.append(icon);
        emailEl.attr('class', txtClass);
              
        updateUserDataObjectFromPage();
        setUserData(userData);
        // underConstructionAlert();
    });
    $("#btnCancel").click(function () {
        userData = getCurrentUserData();
        loadPageFromUserDataObject();
        // underConstructionAlert();
    });
    $("#signOut").click(function () {
        userLogOff();
        window.location = "home.html";
    });

});