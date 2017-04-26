$(document).ready(function () {

  // init the police station
  startPoliceStation = function(){
    currentScene = "policeStationScene";
    $(".policeStationScene, .inventoryIcon, .stopMusic, .playMusic").fadeIn(1500);
    $("#player").fadeIn(700);
    $("#policeStationSceneMusic")[0].play();
  };

  // click on police station door to enter
  $(".stationDoor").click(function() {
    $("#stationDoor")[0].play();
    $(".policeStationScene, #player").toggle();
    $(".policeStationInteriorScene").fadeIn(1500);
    var startX = ($(".policeStationExit").position().left) - 50;
    var startY = ($(".policeStationExit").position().top) + 200;
    $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveLeft.png">');
    $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    $("#player").fadeIn(700);
  });
  // comment on car when looked at and show option to enter car
  $("div#car.thing.policeStationExteriorThing").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#car").position().left) + ($("#car").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (action === "Look at") {
      $(".playerSpeach").html("Hope I don't need gas...");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    } else if (action === "Walk to") {
      $(".travel").toggle();
    }
  });

  // make Dick have to walk to bottom of entrance hall before he can walk up up the corridor, to stop him walking through walls!
  $(".walkableArea.policeStationInterior").click(function(e) {
    var playerPositionX = $("#player").position().left
    var playerPositionY = $("#player").position().top
    var wallX = $(".wallCorner").position().left;
    var wallY = $(".wallCorner").position().top;
    if ((playerPositionX > wallX) && (e.pageY < wallY) || (playerPositionY < wallY) && (e.pageX > wallX)) {
      $('#player').stop();
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    }
  });

  // Exit the station
  $(".policeStationExit").click(function() {
    $("#stationDoor")[0].play();
    $(".policeStationInteriorScene, #player").hide();
    $(".policeStationScene").fadeIn(1500);
    var startX = ($(".stationDoor").position().left) + 50;
    var startY = ($(".stationDoor").position().top) + 150;
    $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
    $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    $("#player").fadeIn(700);
  });
});