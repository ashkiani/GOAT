$(document).ready(function () {
    console.log("Document Ready!");

    //Navbar burger
    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
    });

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
    var passValIconEl = $("#passValIcon");
    var passErrorEl = $("#passError");
    //shoeSizeEl
    var addressEl = $("#addressText");
    var ccNumberEl = $("#ccNumberText");
    var ccNameEl = $("#ccNameText");
    var ccExpEl = $("#ccExpText");
    var lastLoginEl = $("#lastLogin");
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
        lastLoginEl.html("Last Login: " + userData.lastLogIn);
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

    // Siavash 1/1/2020
    // Shows error input messages for the selected elements
    function showErrors(errors, iconEl, errorEl, txtEl) {
        var result = false;
        iconEl.html("");
        errorEl.text("");
        var icon = $("<i>");
        var iconClass = "fas fa-";
        var txtClass = "input is-";
        if (errors.length > 0) {
            //show errors
            iconClass += "exclamation-triangle";
            errorEl.text(errors[0]);
            txtClass += "danger";
        }
        else {
            result = true;
            iconClass += "check";
            txtClass += "success";
        }

        icon.addClass(iconClass);
        iconEl.append(icon);
        txtEl.attr('class', txtClass);
        return result;
    }

    //Siavash 1/1/2020
    //Updates the UI per validation result and returns True if the inputs are valid, False otherwise.
    function isValid() {
        var errors = getEmailErrors(emailEl.val());
        var emailResult = showErrors(errors, emailIconEl, emailErrorEl, emailEl);
        errors = getPasswordErrors(passwordEl.val());
        var passResult = showErrors(errors, passValIconEl, passErrorEl, passwordEl);
        return (emailResult && passResult);
    }

    $("#btnUpdate").click(function () {
        if (isValid()) {
            updateUserDataObjectFromPage();
            setUserData(userData);
            // underConstructionAlert();
        }

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