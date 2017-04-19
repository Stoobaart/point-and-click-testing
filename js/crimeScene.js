var aboutVictim = false;
var suspects = false;
var witnesses = false;
var shardCollected = false;

$(document).ready(function () {
  // init the crime scene
  startCrimeScene = function(){
    currentScene = "crimeScene";
    $(".menuArea, .sceneOneScreen, .inventoryIcon").fadeIn(2000);
    $("#player").fadeIn(1000);
    $("#crimeSceneMusic")[0].play();
  };
  // crime scene music control
  $(".stopMusic").click(function() {
    $('#crimeSceneMusic')[0].pause();
  })  
  $(".playMusic").click(function() {
    $('#crimeSceneMusic')[0].play();
  })

  // say I need to get closer if the player is too far from an obj
  getCloser = function(){
    $(".playerSpeach").html('I need to get closer');
    setTimeout(function() {
      $(".playerPortrait, .playerSpeach").toggle();
    }, 3000);
  };
  // clear speach after a few seconds
  speakClear = function() {
    var words = $(".playerSpeach").html();
    setTimeout(function() {
      $(".playerPortrait, .playerSpeach").toggle();
    }, words.length * 75);
  };
  npcSpeakClear = function() {
    var words = $(".npcSpeach").html();
    setTimeout(function() {
      $(".npcPortrait, .npcSpeach").toggle();
    }, words.length * 75);
  };

  // All functions for looking at stuff on the screen
  $("#victim").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($(this).position().left) + ($(this).position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 35 && action === "Look at" || distance < -280 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      getCloser();
    } else if (distance < 35 && action === "Look at" || distance > -280 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      $(".playerSpeach").html("Looks like the last known whereabouts of our victim... a John Doe");
      speakClear();
    }
  });

  $("#shards").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#shards").position().left) + ($("#shards").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 60 && action === "Look at" || distance < -220 && action === "Look at" || distance > 60 && action === "Pick up" || distance < -220 && action === "Pick up") {
      $(".playerPortrait, .playerSpeach").toggle();
      getCloser();
    } else if (distance < 60 && action === "Look at" || distance > -220 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      $(".playerSpeach").html("Shards of glass... There's blood everywhere.");
      speakClear();     
    } else if (distance < 60 && action === "Pick up" || distance > -220 && action === "Pick up") {
      if (shardCollected === true) {
        $(".playerPortrait, .playerSpeach").toggle();
        $(".playerSpeach").html("I already have a piece");
        speakClear();
      } else {
        $(".playerPortrait, .playerSpeach").toggle();
        $(".playerSpeach").html("I'll take a small piece for analysis");
        speakClear();
        setTimeout(function() {
          items.push({"name": "shard", "url": "assets/images/shard.png"});
          updateInventory();
        }, 1500);
        shardCollected = true;
      }
    }
  });

  $("#head").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#head").position().left) + ($("#head").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 35 && action === "Look at" || distance < -260 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      getCloser();
    } else if (distance < 35 && action === "Look at" && aboutVictim == false || distance > -260 && action === "Look at" && aboutVictim == false) {
      $(".playerSpeach").html("There are ways to get ahead in life, and this aint one of 'em, unless you're the murderer...Then this is Exactly how you get a head");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    } else if (distance < 35 && action === "Look at" && aboutVictim == true || distance > -260 && action === "Look at" && aboutVictim == true) {
      $(".playerSpeach").html("Twisted off... who... or what could do this?");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    }
  });

  $("#car").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#car").position().left) + ($("#car").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (action === "Look at") {
      $(".playerSpeach").html("My wheels, she aint much to look at, but it beats walking");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    } else if (action === "Walk to") {
      $(".travel").toggle();
    }
  });
  
  $("#brokenWindow").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#brokenWindow").position().left) + ($("#brokenWindow").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > -65 && action === "Look at" || distance < -400 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      getCloser();
    } else if (distance < -65 && action === "Look at" || distance > -400 && action === "Look at") {
      $(".playerSpeach").html("I guess this is where these shards of glass came from. What does this have to do with the murder? Could this be a robbery gone wrong?");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    }
  });

  $("#handPrint").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#handPrint").position().left) + ($("#handPrint").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (action === "Look at") {
      $(".playerSpeach").html("I should run this for prints back at HQ");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    }
  });

  $("#urine").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#urine").position().left) + ($("#urine").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 60 && action === "Look at" || distance < -220 && action === "Look at" || distance > 60 && action === "Pick up" || distance < -220 && action === "Pick Up" || distance > 60 && action === "Use cup on" || distance < -220 && action === "Use cup on") {
      $(".playerPortrait, .playerSpeach").toggle();
      getCloser();
    } else if (distance < 60 && action === "Look at" || distance > -220 && action === "Look at") {
      $(".playerSpeach").html("A puddle of urine... I should scoop some up for analysis");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear();     
    } else if (distance < 60 && action === "Pick up" || distance > -220 && action === "Pick up") {
      $(".playerSpeach").html("I'm not using my hands, I need some kind of receptacle");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear();     
    } else if (distance < 60 && action === "Use cup on" || distance > -220 && action === "Use cup on") {
      $(".playerSpeach").html("Perhaps there's use for you yet cup! Not sure how much to take. Let's fill it up just incase");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
      $(".playerAction").html("Walk to");
      findWithAttr(items, 'name', 'cup');
      items.splice(itemToRemove, 1);
      setTimeout(function() {
        items.push({"name": "cup of pee", "url": "assets/images/cupFull.png"});
        updateInventory();
      }, 1500);
    }
  });

  $("#syringe").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#syringe").position().left) + ($("#syringe").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 35 && action === "Look at" || distance < -160 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      getCloser();
    } else if (distance < 35 && action === "Look at" && suspects == false || distance > -160 && action === "Look at" && suspects == false) {
      $(".playerSpeach").html("Hmmm, Could this be related? Or maybe some crack head left it here? This place is pretty seedy...");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    } else if (distance < 35 && action === "Look at" && suspects == true || distance > -160 && action === "Look at" && suspects == true || distance < 35 && action === "Pick up" && suspects == true || distance > -160 && action === "Pick up" && suspects == true) {
      $(".playerSpeach").html("So this belongs to the crack head after all. I don't need it.");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    }
  });

  $("#npcRodriguez").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#npcRodriguez").position().left) + ($("#npcRodriguez").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 135 && action === "Look at" || distance < -460 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      getCloser();
    } else if (distance < 135 && action === "Look at" || distance > -460 && action === "Look at") {
      $(".playerSpeach").html("Officer Rodriguez. He looks pretty shaken up. Didn't even know he smokes..");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    } else if (distance < 135 && action === "Use gun on" || distance > -460 && action === "Use gun on") {
      $(".playerSpeach").html("The only thing I want to blow Rodriguez away with is my wit");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear();
    } else if (distance < 135 && action === "Use shard on" || distance > -460 && action === "Use shard on") {
      $(".playerSpeach").html("I don't think he's interested in this");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear();
    } else if (distance < 135 && action === "Use cup of pee on" || distance > -460 && action === "Use cup of pee on") {
      $(".playerSpeach").html("Tempting, but I think he's had a tough enough day as it is");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear();
    }
  });
});






