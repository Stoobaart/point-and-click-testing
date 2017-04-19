$(document).ready(function () {

  // init the police station
  startPoliceStation = function(){
    currentScene = "policeStationScene";
    $(".policeStationScene, .inventoryIcon").fadeIn(1500);
    $("#player").fadeIn(700);
    $("#policeStationSceneMusic")[0].play();
  };

  $(".stationDoor").click(function() {
    alert("entered police station");
  });
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

});