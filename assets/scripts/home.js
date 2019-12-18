//Fade In home page notification
$("#home-notification").fadeIn(1000);

//Delete home page notification
document.addEventListener('DOMContentLoaded', () => {
    (document.querySelectorAll('.notification .delete') || []).forEach(($delete) => {
      $notification = $delete.parentNode;
      $delete.addEventListener('click', () => {
       
        $notification.parentNode.removeChild($($notification).fadeOut(500));
      });
    });
  });