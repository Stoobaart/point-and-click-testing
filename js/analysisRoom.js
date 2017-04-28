$(document).ready(function () { 
  startAnalysisRoom = function() {
    $("#stationDoor")[0].play();
    $(".policeStationInteriorScene, #player").toggle();
    $(".analysisRoomScene").fadeIn(1500);
    $("#policeStationSceneMusic")[0].pause();
    $("#analysisRoomMusic")[0].play()
    var startX = ($(".analysisExit").position().left) - 50;
    var startY = ($(".analysisExit").position().top) + 200;
    $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveLeft.png">');
    $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    $("#player").fadeIn(700);
  }

  // All the things in the analysis room
  $(".analysisExit").click(function () {
    if (action === "Walk to") {
      $("#stationDoor")[0].play();
      $(".analysisRoomScene").toggle();
      $("#policeStationSceneMusic")[0].play();
      $("#analysisRoomMusic")[0].pause()
      $(".policeStationInteriorScene").fadeIn(1500);
      var startX = ($(".evidence").position().left) + 50;
      var startY = ($(".evidence").position().top) + 150;
      $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
      $("#player").fadeIn(700);
    }
  });

});