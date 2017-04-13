$(document).ready(function () {

  $(".options").toggle();

  $("#npcRodriguez").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#npcRodriguez").position().left) + ($("#npcRodriguez").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 135 && action === "Talk to" || distance < -460 && action === "Talk to") {
      getCloser();
    } else if (distance < 135 && action === "Talk to" || distance > -460 && action === "Talk to") {
      $(".playerSpeak").html("Officer Rodriguez. What's the deal here?");
      speakClear();
      setTimeout(RodriguezTalk, 3000);
    }
  });
  toggleOptions = function(){
    $(".options").toggle();
  }

  RodriguezTalk = function(){
    $(".npcSpeak").html("It's not great, Dick. Somebody got messed up here real good....or bad.. I'm so confused right now..");
    npcSpeakClear();
    setTimeout(toggleOptions, 6000);
  }

  $(".victim").click(function(){
    $(this).css("color", "grey");
    aboutVictim = true;
    toggleOptions();
    $(".npcSpeak").html("Male Caucasian of unknown identity, roughly 35-40 years of age, broken knee, decapitated and 5\"11...I think.");
    npcSpeakClear();
    response = function(){
      $(".playerSpeak").html("How was he decapitated?");
      speakClear();
    };
    setTimeout(response, 8000);
    npcResponse = function(){
      setTimeout(function(){
        $(".npcSpeak").html("His head was twisted completely off. it would take someone with incredible strength to do this");
      }, 4000);
      npcSpeakClear();
    };
    setTimeout(npcResponse, 6000)
    setTimeout(toggleOptions, 15000);
  });

  $(".suspects").click(function(){
    $(this).css("color", "grey");
    toggleOptions();
    $(".npcSpeak").html("We have a possible suspect or witness down in lock up now. Some Crack head, that's his needle right there.");
    npcSpeakClear();
    response = function(){
      $(".playerSpeak").html("I'll go shake him down after I look around");
      speakClear();
    };
    setTimeout(response, 8000);
    npcResponse = function(){
      setTimeout(function(){
        $(".npcSpeak").html("Good call. Something just feels wrong about all of this, Dick");
      }, 4000);
      npcSpeakClear();
    };
    setTimeout(npcResponse, 6000)
    setTimeout(toggleOptions, 15000);
  });
  $(".witnesses").click(function(){
    $(this).css("color", "grey");
    toggleOptions();
        $(".npcSpeak").html("None apart from the crack head we caught. I'm not sure if he even knows his own name though. Think he said it was Mahflnme");
    npcSpeakClear();
    response = function(){
      $(".playerSpeak").html("How can nobody have seen a man get his head removed?");
      speakClear();
    };
    setTimeout(response, 8000);
    npcResponse = function(){
      setTimeout(function(){
        $(".npcSpeak").html("Beats me, Dick. You'll need your head screwed on for this case. Sorry... I should head off.. heh heh... sigh.");
      }, 3500);
      npcSpeakClear();
    };
    setTimeout(npcResponse, 6000)
    setTimeout(toggleOptions, 15000);
  });
  $(".bye").click(function(){
    $(this).css("color", "grey");
    $(".npcSpeak").html("See ya bud");
    npcSpeakClear();
    toggleOptions();
  });



     

});