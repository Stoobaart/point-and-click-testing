var aboutVictim = false;
var suspects = false;
var witnesses = false;
var shardCollected = false;

$(document).ready(function () {
  // init the crime scene
  startCrimeScene = function(){
    currentScene = "crimeScene";
    $(".menuArea, .sceneOneScreen, .inventoryIcon, .stopMusic, .playMusic").fadeIn(2000);
    $("#player").fadeIn(1000);
    $("#crimeSceneMusic")[0].play();
  };

  // All functions for looking at stuff on the screen
  $("#victim").click(function(e) {
    distanceFromThing("#victim");
    if (distance > 35 && action === "Look at" || distance < -280 && action === "Look at") {
      playerSpeach("I need to get closer")
    } else if (distance < 35 && action === "Look at" || distance > -280 && action === "Look at") {
      playerSpeach("Looks like the last known whereabouts of our victim... a John Doe")
    }
  });

  $("#shards").click(function(e) {
    distanceFromThing("#shards");
    if (distance > 60 && action === "Look at" || distance < -220 && action === "Look at" || distance > 60 && action === "Pick up" || distance < -220 && action === "Pick up") {
      playerSpeach("I need to get closer")
    } else if (distance < 60 && action === "Look at" || distance > -220 && action === "Look at") {
      playerSpeach("Shards of glass... There's blood everywhere.")   
    } else if (distance < 60 && action === "Pick up" || distance > -220 && action === "Pick up") {
      if (shardCollected === true) {
        playerSpeach("I already have a piece")
      } else {
        playerSpeach("I'll take a small piece for analysis")
        setTimeout(function() {
          items.push({"name": "shard", "url": "assets/images/shard.png"});
          updateInventory();
        }, 1500);
        shardCollected = true;
      }
    }
  });

  $("#head").click(function(e) {
    distanceFromThing("#head");
    if (distance > 35 && action === "Look at" || distance < -260 && action === "Look at") {
      playerSpeach("I need to get closer")
    } else if (distance < 35 && action === "Look at" && aboutVictim == false || distance > -260 && action === "Look at" && aboutVictim == false) {
      playerSpeach("There are ways to get ahead in life, and this aint one of 'em, unless you're the murderer...Then this is Exactly how you get a head")
    } else if (distance < 35 && action === "Look at" && aboutVictim == true || distance > -260 && action === "Look at" && aboutVictim == true) {
      playerSpeach("Twisted off... who... or what could do this?")
    }
  });

  $("#car").click(function(e) {
    distanceFromThing("#car");
    if (action === "Look at") {
      playerSpeach("My wheels, she aint much to look at, but it beats walking")
    } else if (action === "Walk to") {
      $(".travel").toggle();
    }
  });
  
  $("#brokenWindow").click(function(e) {
    distanceFromThing("#brokenWindow");
    if (distance > -65 && action === "Look at" || distance < -400 && action === "Look at") {
      playerSpeach("I need to get closer")
    } else if (distance < -65 && action === "Look at" || distance > -400 && action === "Look at") {
      playerSpeach("I guess this is where these shards of glass came from. What does this have to do with the murder? Could this be a robbery gone wrong?")
    }
  });

  $("#handPrint").click(function(e) {
    if (action === "Look at") {
      playerSpeach("I should run this for prints back at HQ")
    }
  });

  $("#urine").click(function(e) {
    distanceFromThing("#urine");
    if (distance > 60 && action === "Look at" || distance < -220 && action === "Look at" || distance > 60 && action === "Pick up" || distance < -220 && action === "Pick Up" || distance > 60 && action === "Use cup on" || distance < -220 && action === "Use cup on") {
      playerSpeach("I need to get closer")
    } else if (distance < 60 && action === "Look at" || distance > -220 && action === "Look at") {
      playerSpeach("A puddle of urine... I should scoop some up for analysis")  
    } else if (distance < 60 && action === "Pick up" || distance > -220 && action === "Pick up") {
      playerSpeach("I'm not using my hands, I need some kind of receptacle")   
    } else if (distance < 60 && action === "Use cup on" || distance > -220 && action === "Use cup on") {
      playerSpeach("Perhaps there's use for you yet cup! Not sure how much to take. Let's fill it up just incase")
      $(".playerAction").html("Walk to");
      action = "Walk to";
      findWithAttr(items, 'name', 'cup');
      items.splice(itemToRemove, 1);
      setTimeout(function() {
        items.push({"name": "cup of pee", "url": "assets/images/cupFull.png"});
        updateInventory();
      }, 1500);
    }
  });

  $("#syringe").click(function(e) {
    distanceFromThing("#syringe");
    if (distance > 35 && action === "Look at" || distance < -160 && action === "Look at") {
      playerSpeach("I need to get closer")
    } else if (distance < 35 && action === "Look at" && suspects == false || distance > -160 && action === "Look at" && suspects == false) {
      playerSpeach("Hmmm, Could this be related? Or maybe some crack head left it here? This place is pretty seedy...") 
    } else if (distance < 35 && action === "Look at" && suspects == true || distance > -160 && action === "Look at" && suspects == true || distance < 35 && action === "Pick up" && suspects == true || distance > -160 && action === "Pick up" && suspects == true) {
      playerSpeach("So this belongs to the crack head after all. I don't need it.")
    }
  });

  $("#npcRodriguez").click(function(e) {
    distanceFromThing("#npcRodriguez");
    if (distance > 135 && action === "Look at" || distance < -460 && action === "Look at") {
      playerSpeach("I need to get closer")
    } else if (distance < 135 && action === "Look at" || distance > -460 && action === "Look at") {
      playerSpeach("Officer Rodriguez. He looks pretty shaken up. Didn't even know he smokes..")
    } else if (distance < 135 && action === "Use gun on" || distance > -460 && action === "Use gun on") {
      playerSpeach("The only thing I want to blow Rodriguez away with is my wit")
    } else if (distance < 135 && action === "Use shard on" || distance > -460 && action === "Use shard on") {
      playerSpeach("I don't think he's interested in this")
    } else if (distance < 135 && action === "Use cup of pee on" || distance > -460 && action === "Use cup of pee on") {
      playerSpeach("Tempting, but I think he's had a tough enough day as it is")
    }
  });
});