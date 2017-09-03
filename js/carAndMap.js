let cupPickedUp = false;

$(document).ready(() => {

// exiting a scene/getting into car
  $(".stay").click(() => {
    $(".travel").toggle();
  });
  $(".leave").click(() => {
    $(".travel").toggle();
    $("#carDoor")[0].play();
    $(".inventoryIcon, .inventory, .sceneOneScreen, .policeStationScene, .stopMusic, .playMusic, .travelMap, #player").hide();
    $(".dickMobileInterior").fadeIn(2000);
    if (cupPickedUp === true) {
      $(".cupEmpty").remove();
    }
    setTimeout(() => {
      $(".dickMobileInteriorImg, .cupEmptyImg, .mapImg").effect("shake", {times:3}, 200);
    }, 1500);
    $('#crimeSceneMusic')[0].pause();
    $('#policeStationSceneMusic')[0].pause();
  });

  // In car actions
  // get out of car
  $(".exitCar").click(() => {
    if (currentScene === "crimeScene") {
      $(".sceneOneScreen, #player").fadeIn(2000);
      $('#crimeSceneMusic')[0].play();
      let startX = ($("div#car.thing").position().left) + 141;
      let startY = ($("div#car.thing").position().top) + 134;
      $("#player").css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
    } else if (currentScene === "policeStationScene") {
      startPoliceStation();
    }
    $("#carDoor")[0].play();
    $(".inventoryIcon, .dickMobileInterior, .stopMusic, .playMusic").toggle();
  });
  // picking up the cup
  $(".cupEmpty").click((e) => {
    // look at cup
    if (action === "Look at"){
      playerSpeach("I should have thrown this away a looong time ago")
      // pick up cup
    } else if (action === "Pick up"){
      playerSpeach("I'll find a trash can for this")
        // after talking, push cup item into items array, and update display
        setTimeout(() => {
          items.push({"name": "cup", "url": "assets/images/cupEmpty.png"});
          updateInventory();
          cupPickedUp = true;
        }, 1500);
        // remove cup image from car
        $(".cupEmpty").remove();
    }
  });
  // click on gps to bring up the travel map
  $(".mapImg").click((e) => {
    $(".travelMap").toggle();
  });
  // click on the police station badge to travel to the station
  $(".stationBadgeImg").click((e) => {
    if (currentScene === "policeStationScene") {
      playerSpeach("I'm already here")
    } else if (shardCollected === false || weeCollected === false) {
      playerSpeach("I need to get what clues I can from the crime scene first")
    } else {
      $("#carStart")[0].play();
      setTimeout(() => {
        $(".dickMobileInterior").fadeOut(2500);
      }, 4000);
      setTimeout(startPoliceStation, 6500);
    }
  });
  // click on the crime scene icon to travel to the crime scene
  $(".crimeSceneIconImg").click((e) => {
    if (currentScene === "crimeScene") {
      playerSpeach("I'm already here")
    } else {
      $("#carStart")[0].play();
      setTimeout(() => {
        $(".dickMobileInterior").fadeOut(2500);
      }, 4000);
      setTimeout(startCrimeScene, 6500);
    }
  });

});