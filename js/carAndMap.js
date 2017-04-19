$(document).ready(function () {

// exiting a scene/getting into car
  $(".stay").click(function() {
    $(".travel").toggle();
  });
  $(".leave").click(function() {
    $(".travel").toggle();
    $("#carDoor")[0].play();
    $(".inventoryIcon, .inventory, .sceneOneScreen, .policeStationScene, .stopMusic, .playMusic, .travelMap, #player").hide();
    $(".dickMobileInterior").fadeIn(2000);
    setTimeout(function(){
      $(".dickMobileInteriorImg, .cupEmptyImg, .mapImg").effect("shake", {times:3}, 200);
    }, 1500);
    $('#crimeSceneMusic')[0].pause();
    $('#policeStationSceneMusic')[0].pause();
  });

  // In car actions
  // get out of car
  $(".exitCar").click(function() {
    if (currentScene === "crimeScene") {
      $(".sceneOneScreen").fadeIn(2000);
      $('#crimeSceneMusic')[0].play();
    } else if (currentScene === "policeStationScene") {
      $(".policeStationScene").fadeIn(2000);
      $('#policeStationSceneMusic')[0].play();
    }
    $("#carDoor")[0].play();
    $(".inventoryIcon, .dickMobileInterior, .stopMusic, .playMusic, #player").toggle();
  });
  // picking up the cup
  $(".cupEmpty").click(function(e) {
    var action = $(".playerAction").html();
    // look at cup
    if (action === "Look at"){
      $(".playerSpeach").html("I should have thrown this away a looong time ago");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
      // pick up cup
    } else if (action === "Pick up"){
      $(".playerPortrait, .playerSpeach").toggle();
        $(".playerSpeach").html("I'll find a trash can for this");
        speakClear();
        // after talking, push cup item into items array, and update to display
        setTimeout(function() {
          items.push({"name": "cup", "url": "assets/images/cupEmpty.png"});
          updateInventory();
        }, 1500);
        // remove cup image from car
        $(".cupEmpty").remove();
    }
  });
  // click on gps to bring up the travel map
  $(".mapImg").click(function(e) {
    $(".travelMap").toggle();
  });
  // click on the police station badge to travel to the station
  $(".stationBadgeImg").click(function(e) {
    if (currentScene === "policeStationScene") {
      $(".playerSpeach").html("I'm already here");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear();
    } else {
      $("#carStart")[0].play();
      setTimeout(function() {
        $(".dickMobileInterior").fadeOut(2500);
      }, 4000);
      setTimeout(startPoliceStation, 6500);
    }
  });
  // click on the crime scene icon to travel to the crime scene
  $(".crimeSceneIconImg").click(function(e) {
    if (currentScene === "crimeScene") {
      $(".playerSpeach").html("I'm already here");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear();
    } else {
      $("#carStart")[0].play();
      setTimeout(function() {
        $(".dickMobileInterior").fadeOut(2500);
      }, 4000);
      setTimeout(startCrimeScene, 6500);
    }
  });




});




