$(document).ready(function () { 
  var load = $('#load');

  $('#save').click(function() {
    saveGame()
  })

  $('.load').click(function() {
    loadGame()
  })

  function saveGame() {
    localStorage.items = JSON.stringify(items);
    localStorage.currentScene = currentScene;
    localStorage.cupPickedUp = JSON.stringify(cupPickedUp);
    localStorage.paperCollected = JSON.stringify(paperCollected);
    localStorage.shardCollected = JSON.stringify(shardCollected);
    localStorage.weeCollected = JSON.stringify(weeCollected);
    localStorage.aboutBlood = JSON.stringify(aboutBlood);
    localStorage.aboutVicDeath = JSON.stringify(aboutVicDeath);
    localStorage.jenkinsIntro = JSON.stringify(jenkinsIntro);
  }

  function loadGame() {
    $(".startScreen, .sceneOneScreen, .menuArea, .inventory, .inventoryIcon, .dickMobileInterior, .policeStationScene, .policeStationInteriorScene, .analysisRoomScene, .travel, .playerPortrait, .npcPortrait, .playerSpeach, .npcSpeach, #player").hide();
    $('#crimeSceneMusic')[0].pause();
    $('#policeStationSceneMusic')[0].pause();
    $('#themeMusic')[0].pause();
    $("#analysisRoomMusic")[0].pause()

    items = JSON.parse(localStorage.items);
    currentScene = localStorage.currentScene;
    cupPickedUp = JSON.parse(localStorage.cupPickedUp);
    paperCollected = JSON.parse(localStorage.paperCollected);
    shardCollected = JSON.parse(localStorage.shardCollected);
    weeCollected = JSON.parse(localStorage.weeCollected);
    aboutBlood = JSON.parse(localStorage.aboutBlood);
    aboutVicDeath = JSON.parse(localStorage.aboutVicDeath);
    jenkinsIntro = JSON.parse(localStorage.jenkinsIntro);
    setTimeout(function() {
      if (currentScene === "crimeScene") {
        startCrimeScene();
      } else if (currentScene === "policeStationScene") {
        startPoliceStation();
        var startX = ($(".stationDoor").position().left) + 50;
        var startY = ($(".stationDoor").position().top) + 150;
        $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
        $("#player").fadeIn(700);
      } else if (currentScene === "policeStationInteriorScene") {
        $("#policeStationSceneMusic")[0].play();
        startPoliceStationInterior();
      } else if (currentScene === "analysisRoomScene") {
        startAnalysisRoom();
      }
      updateInventory()
    }, 1100)
  }

});