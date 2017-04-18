$(document).ready(function () {
  // hide everything and fade in the start screen
  $(".startScreen, .inventory, .inventoryIcon, .dickMobileInterior, .policeStationScene").hide();
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
    setTimeout(function() {
      $(".menuArea, .sceneOneScreen, .inventoryIcon").fadeIn(2000);
      $("#crimeSceneMusic")[0].play();
    }, 1500);
  });
});

