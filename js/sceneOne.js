$(document).ready(function () {
  $(".look").click(function() {
    $(".playerAction").html("Look at");
  });
  $(".walk").click(function() {
    $(".playerAction").html("Walk to");
  });

  getCloser = function(){
    $(".playerSpeak").html('I need to get closer');
    setTimeout(function() {
      $(".playerSpeak").html("");
    }, 3000);
  };

  speakClear = function() {
    var words = $(".playerSpeak").html();
    setTimeout(function() {
      $(".playerSpeak").html("");
    }, words.length * 66);
  };

  $("#victim").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($(this).position().left) + ($(this).position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 35 && action === "Look at" || distance < -280 && action === "Look at") {
      getCloser();
    } else if (distance < 35 && action === "Look at" || distance > -280 && action === "Look at") {
      $(".playerSpeak").html("Looks like the last known whereabouts of our victim... a John Doe");
      speakClear();
      }
    });

    $("#shards").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#shards").position().left) + ($("#shards").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 60 && action === "Look at" || distance < -220 && action === "Look at") {
      getCloser();
    } else if (distance < 60 && action === "Look at" || distance > -220 && action === "Look at") {
      $(".playerSpeak").html("Shards of glass... There's blood everywhere.");
      speakClear();     
      }
    });

    $("#head").click(function(e) {
    var action = $(".playerAction").html();
    var distance = (($("#head").position().left) + ($("#head").position().top)) - (($("#player").position().left) + ($("#player").position().top));
    if (distance > 35 && action === "Look at" || distance < -60 && action === "Look at") {
      getCloser();
    } else if (distance < 35 && action === "Look at" || distance > -60 && action === "Look at") {
      $(".playerSpeak").html("There are ways to get ahead in life, and this aint one of 'em, unless you're the murderer...Then this is Exactly how you get a head");
      speakClear(); 
      }
    });

});