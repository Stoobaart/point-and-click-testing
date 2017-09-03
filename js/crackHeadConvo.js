crackheadIntro = false;

$(document).ready(() => {

	crackheadTalk = () => {
		if (crackheadIntro === false) {
			crackheadIntro = true;
			playerSpeach("Okay sir, I'm gonna need you to take it from the top and explain to me exactly what happened")
			setTimeout(() => {
				npcSpeach("Yeah man. sure thing. Are you sure that they aren't listening though?")
				setTimeout(() => {
					playerSpeach("Who? Oh it doesn't matter who, this is a, err, safe zone, so don't worry")
					setTimeout(() => {
						npcSpeach("Anything you say chief")
						setTimeout(() => {
							toggleOptions()
						}, 2000)
					}, 5000)
				}, 4200)
			}, 7000)
		} else if (crackheadIntro === true) {
			playerSpeach("Okay buddy, let's try this again")
			setTimeout(() => {
				toggleOptions();
			}, 2500)
		}
	}

});