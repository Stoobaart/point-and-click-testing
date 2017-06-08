var interrogationDone = true;

$(document).ready(function () { 

  startInterrogationRoom = function() {
    currentScene = "interrogationRoomScene";
    $("#stationDoor")[0].play();
    $(".policeStationInteriorScene, #player").hide();
    $(".interrogationRoomScene, .inventoryIcon, .menuArea, .stopMusic, .playMusic").fadeIn(1000);
    $("#policeStationSceneMusic")[0].pause();
    $("#interrogationRoomMusic")[0].play()
    var startX = ($(".interrogationExit").position().left) - 50;
    var startY = ($(".interrogationExit").position().top) + 200;
    $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveLeft.png">');
    $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    $("#player").fadeIn(500);
  }

  $(".interrogationExit").click(function() {
    if (action === "Walk to") {
      $("#stationDoor")[0].play();
      $(".interrogationRoomScene").toggle();
      currentScene = "policeStationInteriorScene";
      $("#policeStationSceneMusic")[0].play();
      $("#interrogationRoomMusic")[0].pause()
      $(".policeStationInteriorScene").fadeIn(1000);
      var startX = ($(".interrogation").position().left) + 80;
      var startY = ($(".interrogation").position().top) + 170;
      $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveRight.png">');
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
      $("#player").fadeIn(500);
    }
  });

  $("#crackhead").click(function() {
    if (action === "Look at") {
      playerSpeach("He saw something.. I just wonder how high he was at the time..")
    } else if (action === "Use gun on") {
      playerSpeach("He seems ready to cooperate already")
    } else if (action === "Use cup on") {
      npcSpeach("Come ooon man. It's empty! This is like water boarding..without the water")
    } else if (action === "Use cup of pee on") {
      npcSpeach("What is this? Lemonade? Tastes bitter")
      $(".playerAction").html("Walk to");
      action = "Walk to";
      findWithAttr(items, 'name', 'cup of pee');
      items.splice(itemToRemove, 1);
      updateInventory()
      setTimeout(function() {
        playerSpeach("Yeah.. Lemonade.. mmmm")
      }, 3000)
    } else if (action === "Use shard on") {
      playerSpeach("Who broke the window in the alley way?")
      setTimeout(function() {
        npcSpeach("It was a machine maaaaann")
        setTimeout(function(){
          playerSpeach("A 'machine man'? like.. half man, half machine?")
          setTimeout(function() {
            npcSpeach("No maaan, it was a machine. maaaaan")
          }, 3000)
        },2000)
      }, 2500)
    } else if (action === "Talk to") {
      crackheadTalk()
    } else {
      playerSpeach("I don't know what you want me to do")
    }
  });

});