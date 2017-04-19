$(document).ready(function () {
  // hide everything and fade in the start screen
  $(".startScreen, .sceneOneScreen, .menuArea, .inventory, .inventoryIcon, .dickMobileInterior, .policeStationScene, #player").hide();
  setTimeout(function() {
    $(".startScreen").fadeIn(1500);
  }, 1000);
  // play theme music (doesn't work on mobile)
  $(".playTheme").click(function() {
    $("#themeMusic")[0].play();
  })
  // click start button to hide start screen and show crime scene with music
  $(".startGameBtn").click(function() {
    $(".startScreen").fadeOut(1500);
    $("#themeMusic").animate({volume: 0}, 1500);
    setTimeout(function(){
      startCrimeScene();
      $(".playerPortrait, .npcPortrait, .playerSpeach, .npcSpeach, .travel").toggle();
    }, 1500);
  });
});

    