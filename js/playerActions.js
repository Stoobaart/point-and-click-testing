var items = [{"name": "gun", "url": "assets/images/gun.png"}];
var currentScene = null;

$(document).ready(function () {

  // show/hide Inventory
  $(".inventoryIcon").click(function() {
    if ($(".inventory").is(":visible")) {
      $(".inventory").slideUp(300);
    } else {
    $(".inventory").slideDown(300);
    }
  });
  // used to update inventory when an item is picked up/changes/is used
  updateInventory = function(){
    $(".items").html(items.map(function(item) {
      return('<img class="item" src="' + item.url + '" name="' + item.name + '">');
    }).join(""));
  }
  updateInventory();

  // change player action choice
  $(".look").click(function() {
    $(".playerAction, .playerActionCar").html("Look at");
  });
  $(".walk").click(function() {
    $(".playerAction, .playerActionCar").html("Walk to");
  });
  $(".talk").click(function() {
    $(".playerAction, .playerActionCar").html("Talk to");
  });  
  $(".pickUp").click(function() {
    $(".playerAction, .playerActionCar").html("Pick up");
  });
  $(document).on("click", ".item", function() {
    $(".playerAction").html("Use " + this.name + " on");
    $(".inventory").slideUp(300);
  });
  
  // Helper logic
  $(document).on("mouseenter", ".item", function(e) {
    $(".helper").html(this.name);
  }).on("mouseout", ".item", function(e) {
    $(".helper").html("");
  });
  $(document).on("mouseenter", ".thing", function(e) {
    $(".helper").html($(e.target).attr('name'));
  }).on("mouseout", ".thing", function(e) {
    $(".helper").html("");
  });


  $('.walkableArea').click(function(e) {
    // player can walk in front or behind
    var rodPos = $("#npcRodriguez").position().top;
    var dickPos = e.pageY - 129;
    if(dickPos >= rodPos){
      $("#npcRodriguez").addClass("inFront");
    } else {
      $("#npcRodriguez").removeClass("inFront");
    }
    // confirm the players action choice
    var action = $(".playerAction").html();
    // When the player clicks somewhere on the screen (walkable area)

    // store the current position of the player Sprite
    var playerPositionX = $("#player").position().left
    var playerPositionY = $("#player").position().top

    // get the difference of where the player has clicked, minus where the sprite is
    var playerPositionXDiff = e.pageX - playerPositionX;
    var playerPositionYDiff = e.pageY - playerPositionY;
    var timeToWalk = (Math.abs(playerPositionXDiff) + Math.abs(playerPositionYDiff)) * 5;
    // if the sprite is being told to move right of it's original position...
    if (action === "Walk to") {
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
          left: e.pageX
       }, timeToWalk, function () {
        // when the sprite reaches the clicked location, stop the animation
        $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
       });
    }
  });
});

