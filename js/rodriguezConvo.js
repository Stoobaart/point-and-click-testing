$(document).ready(function () {

  $(".options").toggle();

  $("#npcRodriguez").click(function(e) {
    var aboutVictim = false;
    var suspects = false;
    var witnesses = false;

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
    $(".npcSpeak").html("It's not good Dick. Somebody got messed up here real good....or bad.. I'm so confused right now..");
    npcSpeakClear();
    setTimeout(toggleOptions, 6000);
  }

  $(".victim").click(function(){
    $(this).css("color", "grey");
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
    setTimeout(toggleOptions, 3000);
  });
  $(".witnesses").click(function(){
    $(this).css("color", "grey");
    toggleOptions();
    setTimeout(toggleOptions, 3000);
  });
  $(".bye").click(function(){
    toggleOptions();
  });



     

});