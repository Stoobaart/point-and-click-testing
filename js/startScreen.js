$(document).ready(function () {
  $(".startScreen").hide();
  setTimeout(function() {
    $(".startScreen").fadeIn(1500);
    $("#themeMusic")[0].play()
  }, 1000);
  $(".startGameBtn").click(function() {
    $(".startScreen").fadeOut(1500);
    $("#themeMusic").animate({volume: 0}, 1500);
    setTimeout(function() {
      $(".menuArea, .sceneOneScreen").fadeIn(2000);
      $("#crimeSceneMusic")[0].play();
      $("#themeMusic").pause();
    }, 1500);
  });
});

