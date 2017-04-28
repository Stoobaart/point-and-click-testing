$(document).ready(function () { 

  $("#jen").click(function(e) {
    distanceFromThing("#jen");
    console.log(distance);
    if (distance > -125 && action === "Talk to" || distance < -460 && action === "Talk to") {
      playerSpeach("I need to get closer")
    } else if (distance < -125 && action === "Talk to" || distance > -460 && action === "Talk to") {
      jenTalk();
      action = "";
    } else if (distance < -125 && action === "Look at" || distance > -460 && action === "Look at") {
      playerSpeach("That's Jen. She keeps this place running. I've never seen her take a sick day")
    } else if (distance < -125 && action === "Use cup of pee on" || distance > -460 && action === "Use cup of pee on") {
      playerSpeach("I better not piss her off...")
    } else if (distance < -125 && action === "Use gun on" || distance > -460 && action === "Use gun on") {
      playerSpeach("You, my friend, need help")
    } else if (distance < -125 && action === "Use paper on" || distance > -460 && action === "Use paper on") {
      playerSpeach("The last thing Jen needs is more paper work")
    } else {
      playerSpeach("Im not sure what you want me to do here")
    }
  });

  jenTalk = function() {
    $(".walk, .look, .talk, .pickUp").prop('disabled',true);
    $(".playerAction").html("");
    playerSpeach("Hey Jen, how are things?")
    setTimeout(function() {
      npcSpeach("Hey Dick. Pretty quiet today. Apart from that crack head that was brought in. What's up?")
    }, 2000)
    setTimeout(toggleOptions, 6500)
  }
  $(".aboutCrackHead").click(function() {
    $(this).css("color", "grey");
    toggleOptions();
    playerSpeach("So the crack head give you any trouble?")
    setTimeout(function(){
      npcSpeach("Well not personally, but he sure made a lot of noise. Screaming about aliens or robots or something")
    }, 2500)
    setTimeout(function() {
      playerSpeach("Damn crazies. What a waste of time")
    }, 7000)
    setTimeout(toggleOptions, 9500)
  });
  $(".aboutJenkins").click(function() {
    $(this).css("color", "grey");
    toggleOptions();
    playerSpeach("Is Jenkins in analysis?")
    setTimeout(function() {
      npcSpeach("Yes, he's waiting for you")
    }, 2000);
    setTimeout(toggleOptions, 3500)
  });
  $(".byeJen").click(function() {
    $(this).css("color", "grey");
    toggleOptions();
    playerSpeach("Chat to ya later, Jen")
    setTimeout(function() {
      npcSpeach("Chat to you soon Dick")
    }, 1500);
    $(".walk, .look, .talk, .pickUp").prop('disabled',false);
    $(".playerAction").html("Walk to");
    action = "Walk to";
  });



});