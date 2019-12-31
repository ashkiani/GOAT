var partJson = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};
var jsonUri = "data:text/plain;base64," + window.btoa(JSON.stringify(partJson));
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', jsonUri, function () {
  console.log('callback - particles.js config loaded');
});
$(document).ready(function () {

  //Siavash 12/28/2019
  //Added this function to handle the Login Failed condition
  function loginFailed() {
    //Add your code here to inform user about the Login Failure.
    console.log("loginFailed");
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
        setLoggedInUserName(userData.email);
        window.location = "home.html";
      }
      else {
        loginFailed();
      }
    }
  });

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
      // The For loop below is an example of how to print the errors in the console. 
      for (var i = 0; i < errors.length; i++) {
        console.log("Error " + (i + 1) + ": " + errors[i]);
      }
    }
    else {
      setUserData(userDataObject);
    }

  });

});

