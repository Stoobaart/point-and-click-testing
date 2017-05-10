$(document).ready(function () { 

  startInterrogationRoom = function() {
    currentScene = "interrogationRoomScene";
    $("#stationDoor")[0].play();
    $(".policeStationInteriorScene, #player").hide();
    $(".interrogationRoomScene, .inventoryIcon, .menuArea, .stopMusic, .playMusic").fadeIn(1000);
    $("#policeStationSceneMusic")[0].pause();
    // $("#analysisRoomMusic")[0].play()
    var startX = ($(".interrogationExit").position().left) - 50;
    var startY = ($(".interrogationExit").position().top) + 200;
    $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveLeft.png">');
    $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    $("#player").fadeIn(500);
  }

  $(".interrogationExit").click(function() {
    if (action === "Walk to") {
      $("#stationDoor")[0].play();
      $(".interrogationRoomScene").toggle();
      currentScene = "policeStationInteriorScene";
      $("#policeStationSceneMusic")[0].play();
      // $("#analysisRoomMusic")[0].pause()
      $(".policeStationInteriorScene").fadeIn(1000);
      var startX = ($(".interrogation").position().left) + 80;
      var startY = ($(".interrogation").position().top) + 170;
      $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveRight.png">');
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
      $("#player").fadeIn(500);
    }
  });

});