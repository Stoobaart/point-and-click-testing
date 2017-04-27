$(document).ready(function () {
  $(".options").toggle();

  $("#npcRodriguez").click(function(e) {
    var distance = (($("#npcRodriguez").position().left) + ($("#npcRodriguez").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 135 && action === "Talk to" || distance < -460 && action === "Talk to") {
      playerSpeach("I need to get closer")
    } else if (distance < 135 && action === "Talk to" || distance > -460 && action === "Talk to") {
      playerSpeach("Officer Rodriguez. What's the deal here?")
      setTimeout(RodriguezTalk, 3000);
    }
  });
  toggleOptions = function(){
    $(".options").toggle();
  }
  RodriguezTalk = function(){
    rodSpeach("It's not great, Dick. Somebody got messed up here real good....or bad.. I'm so confused right now..")
    setTimeout(toggleOptions, 5500);
    $(".walk, .look, .talk, .pickUp").prop('disabled',true);
    $(".playerAction").html("");
  }

  $(".victim").click(function(){
    $(this).css("color", "grey");
    aboutVictim = true;
    toggleOptions();
    rodSpeach("Male Caucasian of unknown identity, roughly 35-40 years of age, broken knee, decapitated and 5\"11...I think.")
    response = function(){
      playerSpeach("How was he decapitated?")
    };
    setTimeout(response, 6000);
    npcResponse = function(){
      rodSpeach("His head was twisted completely off. it would take someone with incredible strength to do this")
    };
    setTimeout(npcResponse, 8000)
    setTimeout(toggleOptions, 12500);
  });

  $(".suspects").click(function(){
    $(this).css("color", "grey");
    suspects = true;
    toggleOptions();
    rodSpeach("We have a possible suspect or witness down in lock up now. Some Crack head, that's his needle right there.")
    response = function(){
      playerSpeach("I'll go shake him down after I look around")
    };
    setTimeout(response, 6000);
    npcResponse = function(){
      rodSpeach("Good call. Something just feels wrong about all of this, Dick")
    };
    setTimeout(npcResponse, 9500)
    setTimeout(toggleOptions, 13000);
  });
  $(".witnesses").click(function(){
    $(this).css("color", "grey");
    witnesses = true;
    toggleOptions();
    rodSpeach("None apart from the crack head we caught. I'm not sure if he even knows his own name though. Think he said it was Mahflnme")
    response = function(){
      playerSpeach("How can nobody have seen a man get his head removed?")
    };
    setTimeout(response, 7500);
    npcResponse = function(){
      rodSpeach("Beats me, Dick. You'll need your head screwed on for this case. Sorry... I should head off.. heh heh... sigh.")
    };
    setTimeout(npcResponse, 12000)
    setTimeout(toggleOptions, 17000);
  });
  $(".bye").click(function(){
    $(this).css("color", "grey");
    rodSpeach("See ya bud")
    toggleOptions();
    $(".walk, .look, .talk, .pickUp").prop('disabled',false);
    $(".playerAction").html("Walk to");
  });
});