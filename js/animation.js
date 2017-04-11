$(document).ready(function (e) {

  $('.gameScreen').click(function(e) {
    // When the player clicks somewhere on the screen (walkable area)

    // store the current position of the player Sprite
    var playerPositionX = $("#player").position().left
    var playerPositionY = $("#player").position().top

    // get the difference of where the player has clicked, minus where the sprite is
    var playerPositionXDiff = e.pageX - playerPositionX;
    var playerPositionYDiff = e.pageY - playerPositionY;

    // if the sprite is being told to move right of it's original position...
    if((playerPositionXDiff > 0) && ((Math.abs(playerPositionXDiff)) > (Math.abs(playerPositionYDiff)))) {
      console.log("Moving right");
      // use the correct (facing the correct direction) image
      $("#player").html('<img class="playerSprite" src="assets/images/TheDetectiveRight.png">');
      // and add the class which is linked to the animation
      $(".playerSprite").addClass("walkRightAnim");

      // Same logic for each other direction
    } else if ((playerPositionYDiff > 0 ) && ((Math.abs(playerPositionXDiff)) < (Math.abs(playerPositionYDiff)))) {
      console.log("Moving down");
      $("#player").html('<img class="playerSprite" src="assets/images/TheDetective.png">');
      $(".playerSprite").addClass("walkDownAnim");
    } else if ((playerPositionYDiff < 0 ) && ((Math.abs(playerPositionXDiff)) < (Math.abs(playerPositionYDiff)))) {
      console.log("Moving up");
      $("#player").html('<img class="playerSprite" src="assets/images/TheDetectiveUp.png">');
      $(".playerSprite").addClass("walkUpAnim");
    } else if ((playerPositionXDiff < 0) && ((Math.abs(playerPositionXDiff)) > (Math.abs(playerPositionYDiff)))) {
      console.log("Moving left");
      $("#player").html('<img class="playerSprite" src="assets/images/TheDetectiveLeft.png">');
      $(".playerSprite").addClass("walkLeftAnim");
    }
    // run the animation (.stop is there to allow you to change direction before the end of each animation)
    $('#player').stop().animate({
        top: e.pageY,
        left: e.pageX
     }, 1500, function () {
      // when the sprite reaches the clicked location, stop the animation
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
     });
 
  });




});