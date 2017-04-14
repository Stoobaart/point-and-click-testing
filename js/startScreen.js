$(document).ready(function () {
  $(".startGameBtn").click(function() {
    $(".startScreen").fadeOut(1500);
    setTimeout(function() {
      $(".menuArea, .sceneOneScreen").fadeIn(2000);
      $("#crimeSceneMusic")[0].play();
    }, 1500);
  });
});