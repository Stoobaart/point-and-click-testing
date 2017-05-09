var paperCollected = false;

$(document).ready(function () {

  // init the police station
  startPoliceStation = function(){
    currentScene = "policeStationScene";
    $("#policeStationSceneMusic")[0].play();
    $("#player").hide();
    $(".policeStationScene, .inventoryIcon, .menuArea, .stopMusic, .playMusic").fadeIn(1000);
    var startX = ($(".stationDoor").position().left) - 20;
    var startY = ($(".stationDoor").position().top) - 200;
    $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveUp.png">');
    $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    $("#player").fadeIn(500);
  };

  // init the interior of the police station
  startPoliceStationInterior = function() {
    currentScene = "policeStationInteriorScene";
    $("#stationDoor")[0].play();
    $(".policeStationInteriorScene, .inventoryIcon, .menuArea, .stopMusic, .playMusic").fadeIn(1000);
    var startX = ($(".policeStationExit").position().left) - 50;
    var startY = ($(".policeStationExit").position().top) + 200;
    $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetectiveLeft.png">');
    $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    $("#player").fadeIn(500);
  };

  // All the things outside the police station
  $(".stationDoor").click(function() {
    if (action === "Look at") {
      playerSpeach("The front door to the station. Shocking.")
    } else if (action === "Walk to") {
      $(".policeStationScene, #player").hide();
      startPoliceStationInterior();
    } else if (action === "Pick up") {
      playerSpeach("Seriously? That's not going to work")
    } else if (action === "Talk to") {
      playerSpeach("Trying to talk to doors now?...oookaaaayy")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".sign").click(function() {
    if (action === "Look at") {
      playerSpeach("Damn kids messing with the sign again")
    } else if (action === "Pick up") {
      playerSpeach("I'll let Mack know that we need a new sign again")
    } else if (action === "Talk to") {
      playerSpeach("Trying to talk to signs now?...aallllrighty then")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".graffiti").click(function() {
    if (action === "Look at") {
      playerSpeach("Bacon. That's original..")
    } else if (action === "Use cup of pee on") {
      playerSpeach("This corrosive substance would probably remove this, but right now I need it")
    } else if (action === "Use gun on") {
      playerSpeach("What's worse on a police station? Graffiti or bullet holes?")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".policeCar").click(function() {
    if (action === "Look at") {
      playerSpeach("Aaah.. the precincts squad car. We used to have two of these")
    } else if (action === "Use cup of pee on") {
      playerSpeach("Seriously..? What is wrong with you?")
    } else if (action === "Use gun on") {
      playerSpeach("No. Just, no")
    } else if (action === "Walk to") {
      playerSpeach("I have my own car")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".graffitiTwo").click(function() {
    if (action === "Look at") {
      playerSpeach("Red Dragons...must be a new gang in town.. and Ollie... if I get my hands on that punk...")
    } else if (action === "Use cup of pee on") {
      playerSpeach("This corrosive substance would probably remove this, but right now I need it")
    } else if (action === "Use gun on") {
      playerSpeach("What's worse on a police station? Graffiti or bullet holes?")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".station").click(function() {
    if (action === "Look at") {
      playerSpeach("Home sweet home")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $("div#car.thing.policeStationExteriorThing").click(function() {
    if (action === "Look at") {
      playerSpeach("Hope I don't need gas...")
    } else if (action === "Walk to") {
      $(".travel").toggle();
    }
  });

// =============================INTERIOR OF THE POLICE STATION=============================
  // make Dick have to walk to bottom of entrance hall before he can walk up up the corridor, to stop him walking through walls!
  $(".walkableArea.policeStationInterior").click(function(e) {
    var playerPositionX = $("#player").position().left
    var playerPositionY = $("#player").position().top
    var wallX = $(".wallCorner").position().left;
    var wallY = $(".wallCorner").position().top;
    if ((playerPositionX > wallX) && (e.pageY < wallY) || (playerPositionY < wallY) && (e.pageX > wallX)) {
      $('#player').stop();
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
    }
  });
  // Exit the station
  $(".policeStationExit").click(function() {
    if (action ==="Walk to") {
      $("#stationDoor")[0].play();
      $(".policeStationInteriorScene, #player").hide();
      $(".policeStationScene").fadeIn(1000);
      currentScene = "policeStationScene";
      var startX = ($(".stationDoor").position().left) + 50;
      var startY = ($(".stationDoor").position().top) + 150;
      $("#player").stop().css({ top: startY, left: startX}).html('<img class="playerSprite" src="assets/images/TheDetective.png">');
      $(".playerSprite").removeClass("walkRightAnim walkLeftAnim walkUpAnim walkDownAnim");
      $("#player").fadeIn(500);
    } else if (action === "Look at") {
      playerSpeach("This is the exit")
    } else if (action === "Use gun on") {
      playerSpeach("It's already open")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".interrogation").click(function() {
    if (action === "Look at") {
      playerSpeach("Goes towards the interrogation room")
    } else if (action === "Walk to") {
      alert("Sorry! The interrogation room is being built!")
    } else if (action === "Use gun on") {
      playerSpeach("I'll use the handle instead")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".evidence").click(function() {
    if (action === "Look at") {
      playerSpeach("Goes towards the analysis room")
    } else if (action === "Walk to") {
      startAnalysisRoom();
    } else if (action === "Use gun on") {
      playerSpeach("I'll use the handle instead")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".waterDispenser").click(function() {
    if (action === "Look at") {
      playerSpeach("Cold, fresh water...mmmm")
    } else if (action === "Use gun on") {
      playerSpeach("If I can't have any water, no one can! Wait. I'm not gonna shoot up Jen's water.")
    } else if (action === "Pick up") {
      playerSpeach("If only the programmer could be bothered to make an animation of me getting some water. I'm sooo thirsty")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".noticeBoard").click(function() {
    if (action === "Look at") {
      playerSpeach("The weekly 'Hit list', this month's calendar, leaflets, and some blank paper")
    } else if (action === "Use gun on") {
      playerSpeach("I don't know why you'd try that")
    } else if (action === "Pick up" && paperCollected === false) {
      playerSpeach("Maybe some of this blank paper will come in handy if I need to print something")
      setTimeout(function(){
        items.push({"name": "paper", "url": "assets/images/paper.png"});
        updateInventory();
        paperCollected = "true";
      }, 1500);
      
    } else if (action === "Pick up" && paperCollected === "true") {
      playerSpeach("I don't need any more paper, and I've already memorised these perps last winter")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });
  $(".filingCabinets").click(function() {
    if (action === "Look at") {
      playerSpeach("General files. Nothing of importance")
    } else if (action === "Use paper on") {
      playerSpeach("Not much point in filing an empty sheet of paper now is there columbo?")
    } else {
      playerSpeach("I'm not sure what you want me to do here")
    }
  });

});