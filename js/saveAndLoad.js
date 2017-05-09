$(document).ready(function () { 
  var load = $('#load');

  $('#save').click(function() {
    saveGame()
  })

  $('#load').click(function() {
    loadGame()
  })

  function saveGame() {
    localStorage.items = JSON.stringify(items);
    localStorage.currentScene = currentScene;
    localStorage.cupPickedUp = cupPickedUp;
    localStorage.paperCollected = paperCollected;
  }

  function loadGame() {
    $(".startScreen, .sceneOneScreen, .menuArea, .inventory, .inventoryIcon, .dickMobileInterior, .policeStationScene, .policeStationInteriorScene, .analysisRoomScene, #player").hide();
    $('#crimeSceneMusic')[0].pause();
    $('#policeStationSceneMusic')[0].pause();
    $('#themeMusic')[0].pause();
    $("#analysisRoomMusic")[0].pause()

    items = JSON.parse(localStorage.items);
    currentScene = localStorage.currentScene;
    cupPickedUp = localStorage.cupPickedUp;
    paperCollected = localStorage.paperCollected;
    setTimeout(function() {
      if (currentScene === "crimeScene") {
        startCrimeScene();
      } else if (currentScene === "policeStationScene") {
        startPoliceStation();
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