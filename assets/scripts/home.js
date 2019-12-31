//Variable for capturing the user who is logged in
var loggedInUserName = getLoggedInUserName();

//If user is not logged in HIDE the log out button, else show the log out button
if(loggedInUserName == ""){
  $("#btnLogOut").hide();
}
else{
  $("#btnLogOut").show();
}

//Fade In home page notification
$("#home-notification").fadeIn(1000);

//Variables for Trending News tweets
var numOfTweets = 2509;
var numOfFollowers = 45933;
var numOfLikes = 233;
var counter = 0;
var increaseTweets = setInterval(change, 2000);

//Delete home page notification
document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      $notification = $delete.parentNode;
      $delete.addEventListener('click', () => {
       
        $notification.parentNode.removeChild($($notification).fadeOut(500));
      });
    });
  });

  //Modal for clicking sneaker of the day
  $("#sneaker-of-day").click(function() {
    $(".sneakerOfDayModal").addClass("is-active");  
  });
  
  $(".modal-close").click(function() {
     $(".sneakerOfDayModal").removeClass("is-active");
  });

//Function to increase the number of tweets, followers and likes every second
function change() {
  $("#num-tweets").text(numOfTweets += 23);
  $("#num-followers").html(numOfFollowers += 9);
  $("#num-likes").html(numOfLikes += 4);
  counter++;
}

//When user hovers over the featured release section, the shoe is revealed
$("#feature-display").hover(function(){
  $("#feature-name").text("OFF-WHITE X JORDAN 1");
  $("#img-div1").fadeIn(5000);
  
})

$("#btnSearch").click(function(){

  $("#searchResults").empty();
 
  var keywordSearched = $("#txtSearch").val();
  var queryURL = `https://itunes.apple.com/search?term=${keywordSearched}&entity=album`;
  
   // Performing our AJAX GET request
   $.ajax({
    url: queryURL,
    method: "GET",
    dataType: "jsonp",
    headers: {
      'Access-Control-Allow-Credentials' : true,
      'Access-Control-Allow-Origin':'*',
      'Access-Control-Allow-Methods':'GET',
      'Access-Control-Allow-Headers':'application/json',
    }
  })
    // After the data comes back from the API
    .then(function(response) {
    
      // Storing an array of results in the results variable
      var results = response.results;

      // Using for loop to create cards for each album returned
      for (var i = 0; i < results.length; i++) {

        var cardDiv = $("<div>");
        cardDiv.addClass("card");
        cardDiv.css("margin-bottom", "5px");
       

        var cardContentDiv = $("<div>");
        cardContentDiv.addClass("card-content");

        var mediaDiv = $("<div>");
        mediaDiv.addClass("media");

        var mediaLeftDiv = $("<div>");
        mediaLeftDiv.addClass("media-left");

        var figure = $("<figure>");
        figure.addClass("image is-48x48");

        var image = $("<img>");
        image.attr("src", response.results[i].artworkUrl100);

        var mediaContent = $("<div>");
        mediaContent.addClass("media-content");

        var pArtistName = $("<p>");
        pArtistName.addClass("title is-4");
        pArtistName.text(response.results[i].artistName);

        var pAlbum = $("<p>");
        pAlbum.addClass("subtitle is-6");
        pAlbum.text(response.results[i].collectionName);

        var contentDiv = $("<div>");
        contentDiv.addClass("content");

        var pDescription = $("<p>");
        pDescription.text(`The ${response.results[i].collectionName} album contains ${response.results[i].trackCount} tracks. The genre has been categorized as ${response.results[i].primaryGenreName}.`);
        
        var pPrice = $("<p>");
        pPrice.text(`You can purchase this album for $${response.results[i].collectionPrice}.`);

        var buttonsDiv = $("<div>");
        buttonsDiv.addClass("buttons");

        var btnProfile = $("<a>");
        btnProfile.text("Artist Profile");
        btnProfile.addClass("button is-link");
        btnProfile.attr({target: "blank_", href: response.results[i].artistViewUrl})

        var btnPreview = $("<a>");
        btnPreview.text("Preview Album");
        btnPreview.addClass("button is-success");
        btnPreview.attr({target: "blank_", href: response.results[i].collectionViewUrl});


        $("#searchResults").append(cardDiv);
        cardDiv.prepend(cardContentDiv);
        cardContentDiv.append(mediaDiv, contentDiv);
        mediaDiv.append(mediaLeftDiv, mediaContent);
        mediaLeftDiv.append(figure);
        figure.append(image);
        mediaContent.append(pArtistName, pAlbum);
        contentDiv.append(pDescription, pPrice, buttonsDiv);
        buttonsDiv.append(btnProfile, btnPreview);
   
      }
      console.log(results);
   
      //console.log(response);

    });

})
