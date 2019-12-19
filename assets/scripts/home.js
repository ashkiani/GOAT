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

  

  
