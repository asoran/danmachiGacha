var vid2 = document.getElementById("gate2");
var vid3 = document.getElementById("gate3");
var vid4 = document.getElementById("gate4");

var persos = ["Arnya Fromel", "Ais Vallenmerde", "Altan kami sama", "Fels healer de merde", "Hestia bigboobs", "golden gui"];
var all4 = [Hitachi_Fushi, Ouka_Iron, Freya_Beauty, Ais_Sparkle, Lefiya_Awake];
var all3 = [Raul_Novice, Mord_Dog, Tione_Back, Kashima_Solid, Lefiya_Thousand, Ais_Sword, Asfi_Combat, Welf_Ignis];
var all2 = [Lili_Sup];

function pull(et){
	let p;
	eval('p = all' + et);
	let pp = p[Math.floor(Math.random() * p.length)];
	console.log(pp);
	return pp;
}

function invoke(btn, nb){
	btn.disabled = true;
	var max = 2;
	var p = [];

	for(i = 0; i < nb; ++i){
		let ch = Math.random();
		console.log(ch);
		let star;

		if(ch < 0.03){
			star = 4;
		}else if(ch < 0.25){
			star = 3;
		}else{
			star = 2;
		}

		let pp = pull(star);
		if (pp.et > max) max = pp.et;
		p.push(pp);
	}

	vid = eval('vid' + max);
	vid.style.display = 'flex';
	vid.play();

	vid.onended = function(){
		vid.style.display = 'none';

		vid.onended = undefined;
		vid.currentTime = 0;

		btn.disabled = false;
		display(p);
	};

}

function display(){
	// Faire pop les persos 1 par 1
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
