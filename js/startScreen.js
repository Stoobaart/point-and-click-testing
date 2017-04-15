$(document).ready(function () {
  $(".startScreen, .inventory, .inventoryIcon").hide();
  setTimeout(function() {
    $(".startScreen").fadeIn(1500);
  }, 1000);
  $(".playTheme").click(function() {
    $("#themeMusic")[0].play();
  })
  $(".startGameBtn").click(function() {
    $(".startScreen").fadeOut(1500);
    $("#themeMusic").animate({volume: 0}, 1500);
    setTimeout(function() {
      $(".menuArea, .sceneOneScreen, .inventoryIcon").fadeIn(2000);
      $("#crimeSceneMusic")[0].play();
    }, 1500);
  });
});

