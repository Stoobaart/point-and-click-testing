var exit = true;

$(document).ready(function () { 
  startAnalysisRoom = function() {
    currentScene = "analysisRoomScene";
    $("#stationDoor")[0].play();
    $(".policeStationInteriorScene, #player").hide();
    $(".analysisRoomScene, .inventoryIcon, .menuArea, .stopMusic, .playMusic").fadeIn(1000);
    $("#policeStationSceneMusic")[0].pause();
    $("#analysisRoomMusic")[0].play()
    var startX = ($(".analysisExit").position().left) - 50;
    var startY = ($(".analysisExit").position().top) + 200;
    $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveLeft.png">');
    $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    $("#player").fadeIn(500);
    setTimeout(function() {
      if (interrogationDone === true && aboutBlood === true && aboutVicDeath === true) {
        exit = false;
        playerSpeach("Jenkins! I think the body needs to be placed under watc..")
        $("#save").prop('disabled',true);
        setTimeout(function() {
          $("img.gurneySprite").css({"animation": "gurney 5800ms steps(30) normal"})
          setTimeout(function() {
            $("#jenkins, #jenkinsImage").remove()
            $("#jump")[0].play();
            $("#robot")[0].play();

          }, 1150)
          setTimeout(function() {
            $("img.gurneySprite").remove();
            $("img.gurneySprite2").css({"animation": "gurneyTwo 1200ms steps(5) normal"})
            setTimeout(function() {
              $("img.gurneySprite2").remove();
              playerSpeach("Jenkins!! NOOOOOOOO!")
              setTimeout(function() {
                playerSpeach("You damn killer robot!! I'll show you!!")
              }, 2000)
            }, 1100)
          }, 5750)
        }, 5000)
      }
    }, 2000)
  }

  // All the things in the analysis room
  $(".analysisExit").click(function () {
    if (exit === false) {
      playerSpeach("I have to deal with this Robot!")
    } else if (action === "Walk to") {
      $("#stationDoor")[0].play();
      $(".analysisRoomScene").toggle();
      currentScene = "policeStationInteriorScene";
      $("#policeStationSceneMusic")[0].play();
      $("#analysisRoomMusic")[0].pause()
      $(".policeStationInteriorScene").fadeIn(1000);
      var startX = ($(".evidence").position().left) + 50;
      var startY = ($(".evidence").position().top) + 150;
      $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
      $("#player").fadeIn(500);
    }
  });
  $(".volatileSubstanceMachine").click(function() {
    if (exit === false) {
      playerSpeach("I have to deal with this Robot!")
    } else if (action === "Look at") {
      playerSpeach("This is where Jenkins handles any dangerous substances. It's empty right now")
    } else if (action === "Use cup of pee on") {
      playerSpeach("I should leave the proper sciency stuff to Jenkins")
    } else if (action === "Use gun on") {
      playerSpeach("I shouldn't make any holes")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".labCabinets").click(function() {
    if(exit === false) {
      playerSpeach("I have to deal with this Robot!")
    } else if (action === "Look at") {
      playerSpeach("Various bottles of chemicals and equipment for Jenkins' work")
    } else if (action === "Pick up") {
      playerSpeach("I probably shouldn't touch ay of this stuff")
    } else if (action === "Use cup of pee on") {
      playerSpeach("I should give this directly to Jenkins")
    } else if (action === "Use gun on") {
      playerSpeach("Have you got any idea how many expolosive chemicals are in here?")
      setTimeout(function(){
        playerSpeach("I don't, but I don't want to find out!")
      }, 3000)
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".gurney").click(function() {
    if (exit === false && action !== "Use gun on") {
      playerSpeach("I have to deal with this Robot!")
    } else if (action === "Look at") {
      playerSpeach("The victim's body... and head")
    } else if (action === "Pick up") {
      playerSpeach("I don't think I can fit this in my pocket")
    } else if (action === "Use paper on") {
      playerSpeach("There's nothing to compare here")
    } else {
      playerSpeach("I'm not sure what you want me to here")
    }
  });
  $(".robot").click(function() {
    if (action === "Use gun on") {
      $("img.gurneySprite4").css({"animation": "gurneyFour 600ms steps(15) normal"})
      $("#robot")[0].pause();
      $("#gunshot")[0].play();
      $("#electrics")[0].play();
      setTimeout(function() {
        $("img.gurneySprite3").remove();
      }, 40)
      setTimeout(function() {
        playerSpeach("Scrap metal....I need to find the first killer robot. And fast.")
        setTimeout(function() {
          $("#save").prop('disabled', false);
          $("#stationDoor")[0].play();
          $(".analysisRoomScene").toggle();
          currentScene = "policeStationInteriorScene";
          // $("#policeStationSceneMusic")[0].play();
          $("#analysisRoomMusic")[0].pause()
          $(".policeStationInteriorScene").fadeIn(1000);
          var startX = ($(".evidence").position().left) + 50;
          var startY = ($(".evidence").position().top) + 150;
          $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
          $("#player").fadeIn(500);
          npcSpeach("Dick! I heard a gun shot! What happened?")
          setTimeout(function() {
            playerSpeach("Robots Jen. They got Jenkins! Don't go in there!")
          }, 3000)
        }, 5500)
      }, 1500)
    }
  });


});