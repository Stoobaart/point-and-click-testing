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
      }, 3000);
      setTimeout(function() {
        npcSpeach("Errrr, Dick?")
      }, 5000);
      setTimeout(function() {
        playerSpeach("Yeah Jenkins? What is it?")
      }, 6000);
      setTimeout(function() {
        npcSpeach("This isn't pee. It's motor oil")
      }, 8000);
      setTimeout(function() {
        playerSpeach("Ah... of course. I knew that.")
      }, 10000);
    } else if (action === "Use cup on") {
      npcSpeach("Thank you Dick, but I am good for cups. Jen keeps us well stocked up");
    } else if (action === "Use shard on") {
      playerSpeach("Here Jenkins, I took this from the crime scene");
      setTimeout(function() {
        npcSpeach("That's quite alright Dick, I already have some of the shattered glass from the crime scene")
      }, 3500);
      setTimeout(function() {
        playerSpeach("So I carried this shard of bloody glass around in my pocket for no reason?")
      }, 7500);
      setTimeout(function() {
        npcSpeach(".......Yep.")
      }, 12000);
    } else if (action === "Talk to") {
      jenkinsTalk();
    } else {
      playerSpeach("I don't know what you want me to do here")
    }
  });

  jenkinsTalk = function() {
    playerSpeach("Hey Jenkins, You were waiting for me?")
    setTimeout(function() {
      npcSpeach("Yes I'd like to talk about my findings from the murder you're looking into")
    }, 2000)
    setTimeout(toggleOptions, 6500);
    setTimeout(function() {
      $(".aboutBlood, .aboutVicDeath").toggle();
    }, 6501)
    $(".walk, .look, .talk, .pickUp").prop('disabled',true);
    $(".playerAction").html("");
    playerAction = "";
  }
  $(".aboutCase").click(function() {
    toggleOptions();
    npcSpeach("Dick, something is very strange with the blood and how the victim died")
    setTimeout(toggleOptions, 5000);
    setTimeout(function() {
      $(".aboutBlood, .aboutVicDeath, .aboutCase").toggle();
    }, 5000)
  });













});