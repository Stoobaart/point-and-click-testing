var aboutVictim = null;
var suspects = null;
var witnesses = null;

$(document).ready(function () {
  $(".sceneOneScreen, .menuArea").toggle();
  // init the crime scene
  startCrimeScene = function(){
    suspects = false;
    witnesses = false;
    aboutVictim = false;
    $(".playerPortrait, .npcPortrait, .playerSpeach, .npcSpeach").toggle();
  };
  startCrimeScene();
  // crime scene music control
  $(".stopMusic").click(function() {
    $('#crimeSceneMusic')[0].pause();
  })  
  $(".playMusic").click(function() {
    $('#crimeSceneMusic')[0].play();
  })

  // change player action choice
  $(".look").click(function() {
    $(".playerAction").html("Look at");
  });
  $(".walk").click(function() {
    $(".playerAction").html("Walk to");
  });
  $(".talk").click(function() {
    $(".playerAction").html("Talk to");
  });
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
  $("#victim").hover(function(){
    $(".helper").html("Victim's body");
  });

  $("#shards").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#shards").position().left) + ($("#shards").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 60 && action === "Look at" || distance < -220 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      getCloser();
    } else if (distance < 60 && action === "Look at" || distance > -220 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      $(".playerSpeach").html("Shards of glass... There's blood everywhere.");
      speakClear();     
    }
  });
  $("#shards").hover(function(){
    $(".helper").html("Bloody shards");
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
  $("#head").hover(function(){
    $(".helper").html("Victim's head");
  });

  $("#car").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#car").position().left) + ($("#car").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (action === "Look at") {
      $(".playerSpeach").html("My wheels, she aint much to look at, but it beats walking");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    }
  });
  $("#car").hover(function(){
    $(".helper").html("The Dick-Mobile");
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
  $("#brokenWindow").hover(function(){
    $(".helper").html("Broken window");
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
  $("#handPrint").hover(function(){
    $(".helper").html("Bloody hand print");
  });

  $("#urine").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#urine").position().left) + ($("#urine").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 60 && action === "Look at" || distance < -220 && action === "Look at") {
      $(".playerPortrait, .playerSpeach").toggle();
      getCloser();
    } else if (distance < 60 && action === "Look at" || distance > -220 && action === "Look at") {
      $(".playerSpeach").html("A puddle of urine... I should scoop some up for analysis");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear();     
    }
  });
  $("#urine").hover(function(){
    $(".helper").html("Urine puddle");
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
    } else if (distance < 35 && action === "Look at" && suspects == true || distance > -160 && action === "Look at" && suspects == true) {
      $(".playerSpeach").html("So this belongs to the crack head after all. I don't need it.");
      $(".playerPortrait, .playerSpeach").toggle();
      speakClear(); 
    }
  });
  $("#syringe").hover(function(){
    $(".helper").html("Bloody syringe");
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
    }
  });
  $("#npcRodriguez").hover(function(){
    $(".helper").html("Officer Rodriguez");
  });
});