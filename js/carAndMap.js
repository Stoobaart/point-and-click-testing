var cupPickedUp = false;

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
    if (cupPickedUp === true) {
      $(".cupEmpty").remove();
    }
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
      $(".sceneOneScreen, #player").fadeIn(2000);
      $('#crimeSceneMusic')[0].play();
      var startX = ($("div#car.thing").position().left) + 141;
      var startY = ($("div#car.thing").position().top) + 134;
      $("#player").css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
    } else if (currentScene === "policeStationScene") {
      startPoliceStation();
    }
    $("#carDoor")[0].play();
    $(".inventoryIcon, .dickMobileInterior, .stopMusic, .playMusic").toggle();
  });
  // picking up the cup
  $(".cupEmpty").click(function(e) {
    // look at cup
    if (action === "Look at"){
      playerSpeach("I should have thrown this away a looong time ago")
      // pick up cup
    } else if (action === "Pick up"){
      playerSpeach("I'll find a trash can for this")
        // after talking, push cup item into items array, and update display
        setTimeout(function() {
          items.push({"name": "cup", "url": "assets/images/cupEmpty.png"});
          updateInventory();
          cupPickedUp = true;
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
      playerSpeach("I'm already here")
    } else if (shardCollected === false || weeCollected === false) {
      playerSpeach("I need to get what clues I can from the crime scene first")
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
      playerSpeach("I'm already here")
    } else {
      $("#carStart")[0].play();
      setTimeout(function() {
        $(".dickMobileInterior").fadeOut(2500);
      }, 4000);
      setTimeout(startCrimeScene, 6500);
    }
  });

});