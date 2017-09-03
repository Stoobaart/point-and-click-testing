$(document).ready(() => {
  $(".options").toggle();

  $("#npcRodriguez").click((e) => {
    distanceFromThing("#npcRodriguez");
    if (distance > 135 && action === "Talk to" || distance < -460 && action === "Talk to") {
      playerSpeach("I need to get closer")
    } else if (distance < 135 && action === "Talk to" || distance > -460 && action === "Talk to") {
      action = "";
      playerSpeach("Officer Rodriguez. What's the deal here?")
      setTimeout(RodriguezTalk, 3000);
    }
  });

  RodriguezTalk = () => {
    $(".walk, .look, .talk, .pickUp").prop('disabled',true);
    $(".playerAction").html("");
    npcSpeach("It's not great, Dick. Somebody got messed up here real good....or bad.. I'm so confused right now..")
    setTimeout(toggleOptions, 5500);
  }

  $(".victim").click(() => {
    $(this).css("color", "grey");
    aboutVictim = true;
    toggleOptions();
    npcSpeach("Male Caucasian of unknown identity, roughly 35-40 years of age, broken knee, decapitated and 5\"11...I think.")
    setTimeout(() => {
      playerSpeach("How was he decapitated?")
    }, 6000);
    setTimeout(() => {
      npcSpeach("His head was twisted completely off. it would take someone with incredible strength to do this")
    }, 8000);
    setTimeout(toggleOptions, 12500);
  });

  $(".suspects").click(() => {
    $(this).css("color", "grey");
    suspects = true;
    toggleOptions();
    npcSpeach("We have a possible suspect or witness down in lock up now. Some Crack head, that's his needle right there.")
    setTimeout(() => {
      playerSpeach("I'll go shake him down after I look around")
    }, 6000);
    setTimeout(() => {
      npcSpeach("Good call. Something just feels wrong about all of this, Dick")
    }, 9500);
    setTimeout(toggleOptions, 13000);
  });
  $(".witnesses").click(() => {
    $(this).css("color", "grey");
    witnesses = true;
    toggleOptions();
    npcSpeach("None apart from the crack head we caught. I'm not sure if he even knows his own name though. Think he said it was Mahflnme")
    setTimeout(() => {
      playerSpeach("How can nobody have seen a man get his head removed?")
    }, 7500);
    setTimeout(() => {
      npcSpeach("Beats me, Dick. You'll need your head screwed on for this case. Sorry... I should head off.. heh heh... sigh.")
    }, 12000);
    setTimeout(toggleOptions, 17000);
  });
  $(".bye").click(() => {
    $(this).css("color", "grey");
    npcSpeach("See ya bud")
    toggleOptions();
    $(".walk, .look, .talk, .pickUp").prop('disabled',false);
    $(".playerAction").html("Walk to");
    action = "Walk to";
  });

  rodCheck = () => {
    if (weeCollected === true && shardCollected === true) {
      npcSpeach("Dick, Jenkins is waiting for you back at the station. You probably shouldn't keep him waiting too long")
    }
  }
});