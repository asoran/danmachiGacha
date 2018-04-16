var vid3 = document.getElementById("gate3");
var vid4 = document.getElementById("gate4");

function write(text){
	console.log(text);
	//document.getElementById('j').innerHTML = text;
}
function writeP(text){
	console.log(text);
	//document.getElementById('k').innerHTML += text + "<br/>";
}
			
var persos = ["Arnya Fromel", "Ais Vallenmerde", "Altan kami sama", "Fels healer de merde", "Hestia bigboobs", "golden gui"];
	
function pull(btn, x){
	btn.disabled = true;
	var ch = Math.random();
	console.info(ch);
	var star = 2;
	if(ch < 0.25){
		star = 4;
	}else if(ch < 0.5){
		star = 3;
	}			
	write(star + ' star incoming...');
	playTrait(1);
	playSound(star).onended = function(){
		var p = star + 'star ' + persos[Math.floor(Math.random() * persos.length)];
		write(p);
		writeP(p);
		if(x <= 1) btn.disabled = false;
		setTimeout(function(){if(--x > 0) pull(btn, x)}, 1000);
	}
}
		
function multi(btn){
	btn.disabled = true;
	vid = (Math.random() >= 0.5 ? vid3 : vid4);
	vid.style.display="flex";
	vid.play();
	vid.onended = function(){
		vid.style.display="none";
		pull(btn, 10);
		vid.onended = undefined;
		vid.currentTime = 0;
	};
			
}
		
function playSound(star){
	let son = new Audio(star + 'star.mp3');
	//son.onended = function(){ playSound(2) };
	son.volume = 0.5;
	son.play();
	return son;
}
	
function playTrait(_){
	let son = new Audio('trait' + (_ == 1 ? '' : 2) + '.mp3');
	son.volume = 0.5;
	son.play();
	return son;
}
	