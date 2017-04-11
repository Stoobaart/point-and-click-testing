$(document).ready(function () {

  $('.walkableArea').click(function(e) {
    // When the player clicks somewhere on the screen (walkable area)

    // store the current position of the player Sprite
    var playerPositionX = $("#player").position().left
    var playerPositionY = $("#player").position().top

    // get the difference of where the player has clicked, minus where the sprite is
    var playerPositionXDiff = e.pageX - playerPositionX;
    var playerPositionYDiff = e.pageY - playerPositionY;
    var timeToWalk = (Math.abs(playerPositionXDiff) + Math.abs(playerPositionYDiff)) * 5;
    // if the sprite is being told to move right of it's original position...
    if((playerPositionXDiff > 0) && ((Math.abs(playerPositionXDiff)) > (Math.abs(playerPositionYDiff)))) {
      // use the correct (facing the correct direction) image
      $("#player").html('<img class="playerSprite" src="assets/images/TheDetectiveRight.png">');
      // and add the class which is linked to the animation
      $(".playerSprite").addClass("walkRightAnim");

      // Same logic for each other direction
    } else if ((playerPositionYDiff > 0 ) && ((Math.abs(playerPositionXDiff)) < (Math.abs(playerPositionYDiff)))) {
      $("#player").html('<img class="playerSprite" src="assets/images/TheDetective.png">');
      $(".playerSprite").addClass("walkDownAnim");
    } else if ((playerPositionYDiff < 0 ) && ((Math.abs(playerPositionXDiff)) < (Math.abs(playerPositionYDiff)))) {
      $("#player").html('<img class="playerSprite" src="assets/images/TheDetectiveUp.png">');
      $(".playerSprite").addClass("walkUpAnim");
    } else if ((playerPositionXDiff < 0) && ((Math.abs(playerPositionXDiff)) > (Math.abs(playerPositionYDiff)))) {
      $("#player").html('<img class="playerSprite" src="assets/images/TheDetectiveLeft.png">');
      $(".playerSprite").addClass("walkLeftAnim");
    }
    // run the animation (.stop is there to allow you to change direction before the end of each animation)
    $('#player').stop().animate({
        top: e.pageY,
        left: e.pageX - 50
     }, timeToWalk, function () {
      // when the sprite reaches the clicked location, stop the animation
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
     });
 
  });
  $("#victim").click(function(e) {
    var distance = (($("#victim").position().left) + ($("#victim").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    console.log(distance);
    if (distance > 25 || distance < -320) {
      $(".playerSpeak").html('I need to get closer');
      setTimeout(function() {
        $(".playerSpeak").html("");
      }, 3000);
    } else {
      $(".playerSpeak").html('Looks like the last known whereabouts of our victim... a John Doe');
        setTimeout(function() {
          $(".playerSpeak").html("");
        }, 4000);
      }
    });





});