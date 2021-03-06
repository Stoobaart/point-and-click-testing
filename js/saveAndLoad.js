$(document).ready(() => { 
  let load = $('#load');

  $('#save').click(() => {
    saveGame()
  })

  $('.load').click(() => {
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
    localStorage.exit = JSON.stringify(exit);
    localStorage.interrogationDone = JSON.stringify(interrogationDone);
    alert("Progress saved");
  }

  function loadGame() {
    $(".startScreen, .sceneOneScreen, .menuArea, .inventory, .inventoryIcon, .dickMobileInterior, .policeStationScene, .policeStationInteriorScene, .analysisRoomScene, .interrogationRoomScene, .travel, .playerPortrait, .npcPortrait, .playerSpeach, .npcSpeach, #player").hide();
    $('#crimeSceneMusic')[0].pause();
    $('#policeStationSceneMusic')[0].pause();
    $('#themeMusic')[0].pause();
    $("#analysisRoomMusic")[0].pause();
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
    exit = JSON.parse(localStorage.exit);
    interrogationDone = JSON.parse(localStorage.interrogationDone);

    setTimeout(() => {
      if (currentScene === "crimeScene") {
        startCrimeScene();
      } else if (currentScene === "policeStationScene") {
        startPoliceStation();
        let startX = ($(".stationDoor").position().left) + 50;
        let startY = ($(".stationDoor").position().top) + 150;
        $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
        $("#player").fadeIn(700);
      } else if (currentScene === "policeStationInteriorScene") {
        $("#policeStationSceneMusic")[0].play();
        startPoliceStationInterior();
      } else if (currentScene === "analysisRoomScene") {
        startAnalysisRoom();
      } else if (currentScene === "interrogationRoomScene") {
        startInterrogationRoom();
      }
      updateInventory()
    }, 1100)
  }

});