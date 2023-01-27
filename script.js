

let allowed_keys = [65,83,68,70,71,72,74,75,76];

window.addEventListener('keydown', function(event){
    	let keyCode = event.keyCode;
    	if (!allowed_keys.includes(keyCode)) return;
    	event.preventDefault();
    	event.stopPropagation();
    	playAudio(keyCode)
});

let drums = document.getElementsByClassName("drum");
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener('click', function(){
    	let keyCode = this.getAttribute("data-key");
    	playAudio(keyCode); 
    }, false);
}

function playAudio(keyCode) { 
	
	let note = document.querySelector("audio[data-key='"+keyCode+"']");
	let drum = document.querySelector(".drum[data-key='"+keyCode+"']");
	note.currentTime = 0;  //Sets current position of playback to 0. So the sound restarts if its still playing.
	drum.classList.add("playing");
	setTimeout(function(){
		drum.classList.remove("playing");
	},100)
	note.play();
} 