crackheadIntro = false;

$(document).ready(function () {

	crackheadTalk = function() {
		if (crackheadIntro === false) {
			crackheadIntro = true;
			playerSpeach("Okay sir, I'm gonna need you to take it from the top and explain to me exactly what happened")
			setTimeout(function() {
				npcSpeach("Yeah man. sure thing. Are you sure that they aren't listening though?")
				setTimeout(function() {
					playerSpeach("Who? Oh it doesn't matter who, this is a, err, safe zone, so don't worry")
					setTimeout(function() {
						npcSpeach("Anything you say chief")
						setTimeout(function() {
							toggleOptions()
						}, 2000)
					}, 5000)
				}, 4200)
			}, 7000)
		} else if (crackheadIntro === true) {
			playerSpeach("Okay buddy, let's try this again")
			setTimeout(function() {
				toggleOptions();
			}, 2500)
		}
	}

});