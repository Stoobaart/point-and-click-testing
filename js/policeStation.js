$(document).ready(function () {

  // init the police station
  startPoliceStation = function(){
    currentScene = "policeStation";
    $(".policeStationScene").fadeIn(1500);
    $("#player").fadeIn(700);
    $("#policeStationSceneMusic")[0].play();
  };
});