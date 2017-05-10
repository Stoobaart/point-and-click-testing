var jenkinsIntro = false;
var aboutBlood = false;
var aboutVicDeath = false;

// testing variable
var interrogationDone = true;

$(document).ready(function () { 
  $("#jenkins").click(function() {
    if (action === "Look at") {
      playerSpeach("Jenkins. Our forensic analysis specialist")
    } else if (action === "Pick up") {
      playerSpeach("That didn't go down too well at Jenkins' 40th. I'll leave him be")
    } else if (action === "Use gun on") {
      playerSpeach("I'm not sure why you would try that. Jenkins' is a saint")
    } else if (action === "Use cup of pee on") {
      playerSpeach("Here Jenkins, take this cup of pee and see who it belongs to")
      findWithAttr(items, 'name', 'cup of pee');
      items.splice(itemToRemove, 1);
      action = "Walk to";
      $(".playerAction").html("Walk to");
      setTimeout(function() {
        npcSpeach("Ok Dick. I will test this right away");
        updateInventory();
      }, 5000);
      setTimeout(function() {
        npcSpeach("Errrr, Dick?")
      }, 8000);
      setTimeout(function() {
        playerSpeach("Yeah Jenkins? What is it?")
      }, 9500);
      setTimeout(function() {
        npcSpeach("This isn't pee. It's motor oil")
      }, 12000);
      setTimeout(function() {
        playerSpeach("Ah... of course. I knew that.")
      }, 15000);
    } else if (action === "Use cup on") {
      npcSpeach("Thank you Dick, but I am good for cups. Jen keeps us well stocked up");
    } else if (action === "Use shard on") {
      playerSpeach("Here Jenkins, I took this from the crime scene");
      setTimeout(function() {
        npcSpeach("That's quite alright Dick, I already have some of the shattered glass from the crime scene")
      }, 4000);
      setTimeout(function() {
        playerSpeach("So I carried this shard of bloody glass around in my pocket for no reason?")
      }, 9000);
      setTimeout(function() {
        npcSpeach(".......Yep.")
      }, 16000);
    } else if (action === "Talk to") {
      jenkinsTalk();
    } else {
      playerSpeach("I don't know what you want me to do here")
    }
  });

  jenkinsTalk = function() {
    if (jenkinsIntro === false) {
      jenkinsIntro = true;
      playerSpeach("Hey Jenkins, You were waiting for me?")
      setTimeout(function() {
        npcSpeach("Yes I'd like to talk about my findings from the murder you're looking into")
      }, 3000)
      setTimeout(toggleOptions, 7000);
      setTimeout(function() {
        $(".aboutBlood, .aboutVicDeath, .byeJenkins").toggle();
      }, 7000)
    } else {
      playerSpeach("Hey Jenkins")
      setTimeout(function() {
        npcSpeach("Hello again Dick, how can I help?")
        $(".aboutCase").hide();
      }, 2000)
      setTimeout(toggleOptions, 4500);
    }
    $(".walk, .look, .talk, .pickUp").prop('disabled',true);
    $(".playerAction").html("");
    action = "";
  };

  $(".aboutCase").click(function() {
    toggleOptions();
    npcSpeach("Dick, something is very strange with the blood and how the victim died")
    setTimeout(toggleOptions, 4500);
    setTimeout(function() {
      $(".aboutBlood, .aboutVicDeath, .aboutCase, .byeJenkins").toggle();
    }, 4500)
  });

  $(".aboutBlood").click(function() {
    $(this).css("color", "grey");
    aboutBlood = true;
    toggleOptions();
    npcSpeach("There's transformation happening to the blood sample. It seems to be infected by a virus that is changing the blood's molecular structure.");
    setTimeout(function() {
      playerSpeach("I get the feeling that shouldn't happen normally")
    }, 8000);
    setTimeout(function() {
      npcSpeach("No Dick. This is extremely abnormal and definately unprecedented.")
    }, 12500);
    setTimeout(toggleOptions, 16000);
  });

  $(".aboutVicDeath").click(function() {
    $(this).css("color", "grey");
    aboutVicDeath = true;
    toggleOptions();
    npcSpeach("The victim's head was literally twisted off. Like a bottle cap. I've never seen anything like this.")
    setTimeout(function() {
      playerSpeach("So this is definately an extremely strong man")
    }, 6000);
    setTimeout(function() {
      npcSpeach("If it was a man at all, Dick")
    }, 9500);
    setTimeout(toggleOptions, 12000)
  });

  $(".byeJenkins").click(function() {
    $(this).css("color", "grey");
    playerSpeach("See you shortly Jenkins")
    toggleOptions();
    $(".walk, .look, .talk, .pickUp").prop('disabled',false);
    $(".playerAction").html("Walk to");
    action = "Walk to";
  });











});