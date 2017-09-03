$(document).ready(() => {
  // hide everything and fade in the start screen
  $(".startScreen, .sceneOneScreen, .menuArea, .inventory, .inventoryIcon, .dickMobileInterior, .policeStationScene, .policeStationInteriorScene, .analysisRoomScene, .interrogationRoomScene, #player").hide();
  setTimeout(() => {
    $(".startScreen").fadeIn(1500);
  }, 1000);
  // play theme music (doesn't work on mobile)
  $(".playTheme").click(() => {
    $("#themeMusic")[0].play();
  })
  // click start button to hide start screen and show crime scene with music
  $(".startGameBtn").click(() => {
    $(".startScreen").fadeOut(1500);
    $("#themeMusic").animate({volume: 0}, 1500);
    setTimeout(() => {
      startCrimeScene();
      $(".playerPortrait, .npcPortrait, .playerSpeach, .npcSpeach, .travel").toggle();
    }, 1500);
    let startX = ($("div#car.thing").position().left) + 411;
    let startY = ($("div#car.thing").position().top) + 314;
    $("#player").css({ top: startY, left: startX});
  });
});

    