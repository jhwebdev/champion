function myFunction () {
	var x = document.getElementById("myTopnav");
	if (x.className === "nav") {
		x.className += " responsive";
	} 	
	else {
		x.className = "nav";
	}
}
		
				
function myReveal() {
	var x = document.getElementById("item");
	if (x.style.display === "none") {
	x.style.display = "block";
	} else {
	x.style.display = "none";
	}
}

//var cacheNum = 1;
//TODO: ADD A WAY TO DISPLAY
//For now just open console log to see outcomes
var crystalButton = document.querySelector('button');
var arr = [];
var endArr = [];
var answer = "";
var champ="";

var mutantArr = ['Archangel','Iceman','Wolverine','Sabretooth','Wolverine X-23','Rogue','Cable','Bishop','Nightcrawler','Psylocke','Storm','Nightcrawler','Beast','Cyclops (BlueTeam)','Cyclops (New Xavier School)','Gambit','Deadpool X-Force','Magneto','Magneto (MARVEL NOW!)','Old Man Logan', 'Colossus'];

var skillArr = ['Gwenpool', 'Blade', 'Hawk Eye', 'Elektra','Daredevil (Classic)', 'Thor (Ragnarok)', 'Crossbones', 'Black Widow', 'Taskmaster','Killlmonger','Punisher','Winter Soldier','Karnak','Black Panther (Classic)','Moon Knight','Kingpin','Agent Venom','Falcon','Daredevil (Netflix)','Black Panther (Civil War)'];

var mysticArr = ['Doctor Voodoo','Scarlet Witch','Ghost Rider','Magik','Dormammu','The Hood','Morningstar','Mephisto','Guillotine','Thor (Jane Foster)','Iron Fist','Mordo','Dr. Strange','Unstoppable Colossus','Juggernaut','Loki'];

var cosmicArr = ['Medusa','Hyperion','Angela','Drax','Thor','Hela','Ms. Marvel','Captain Marvel','Black Bolt','Phoenix','Spider-Man Symbiote','Gamora','King Groot','Venom','Superior Iron Man','Venompool','Carnage','Ronan','Groot','Kamala Khan'];

var techArr = ['Spider-Man (Stark)','Star-Lord','Vision (Classic)','Vision (Age of Ultron)', 'Ultron','Doctor Octopus','Sentinel','Yondu','Green Goblin','Nebula','Punisher 2099','Rocket Raccoon','Howard The Duck','Kang','Vulture','Iron Man','Civil Warrior','War Machine','Hulk Buster','Iron Patriot'];

var sciArr = ['Quake','Void','Hulk','Red Hulk','Luke Cage','Gladiator Hulk','M.O.D.O.K','Captain America WW2','Yellow Jacket','Sentry','Captain America (Classic)','Spiderman (Classic)','Electro','Spider Gwen','Spider-Man Miles Morales','Rhino','Joe Fixit','She Hulk','Ant-Man','Abomination'];

var champNum = 0;
var typeNum=0;
var answer = document.querySelector('#spinResult');
crystalButton.onclick = function(){
	start();
	
}
function start(){
	arr.length=0;
	endArr.length =0;
	var crystalCount = 0;
	crystalCount = prompt('How many crystals do you want to spin? (Warning: Numbers over 10 go back to 10)');
	localStorage.setItem('crystals',crystalCount);
	var crystalNum = Number(crystalCount);
	if (crystalNum >= 11){
		crystalNum = 10;
	}
	for(var i = 1; i <=crystalNum; i++) {
		arr.push(i);
		endArr.push(i);
	}
	spinPHC(crystalNum);
	for (var k = 0; k<arr.length;k++){
		champ="";
		assignChamp();
		if(arr[k] >=1 && arr[k]<=84)
		{
			endArr[k] = ' 2*'+ champ;
		}
		else if (arr[k]>=85 && arr[k]<=98){
			endArr[k]= ' 3*'+ champ;
		}
		else if (arr[k]>=99){
			endArr[k]= ' 4*'+ champ;
		}
		else{
			endArr[k] = 'error';
		}
	}
	console.log(endArr);	
	//var stars = endArr.sort();
	console.log(endArr);
	var spinAnswer = endArr.join(", ");
	//endArr.toString();
	//answer += endArr + "";
	/* console.log(spinAnswer);
	console.log(spinAns instanceof String); */
	displayAnswer(spinAnswer);

}
//This function assigns a champion to the number
function assignChamp(){	
	typeNum=1;
	typeNum=Math.floor(Math.random()*6)+1;
	if(typeNum <= 1){
		champNum=0;
		champNum =  Math.floor(Math.random() * mutantArr.length);
		champ = mutantArr[champNum];
	}
	else if (typeNum ===2){
		champNum=0;
		champNum =  Math.floor(Math.random() *mysticArr.length);
		champ = mysticArr[champNum];
	}
	else if(typeNum === 3){
		champNum=0;
		champNum =  Math.floor(Math.random() *skillArr.length);
		champ = skillArr[champNum];
	}
	else if(typeNum === 4){
		champNum=0;
		champNum =  Math.floor(Math.random() *cosmicArr.length);
		champ = cosmicArr[champNum];
	}
	else if(typeNum === 5){
		champNum=0;
		champNum =  Math.floor(Math.random() * techArr.length);
		champ = techArr[champNum];
	}
	else if(typeNum >= 6){
		champNum=0;
		champNum =  Math.floor(Math.random() * sciArr.length);
		champ = sciArr[champNum];
	}
	else{
		champ = 'Thanos';
	}
}
//don't know if this works, just look at concole for answers
function displayAnswer(string){
	console.log(string);
	answer.textContent = ('' + string);
}
function spinPHC (n){
	n--;
	for(;n>=0; n--){
		var draw =  Math.floor(Math.random() * 100) + 1; 
		arr[n] = draw;
		/*if(draw >=1 && draw<=84){
			arr[n] = draw;
		}
		else if (draw>=85 && draw<=98){
			arr[n]=draw;
		}
		else if (draw>=99){
			arr[n]=draw;
		}
		else{
			arr[n] = draw
		}*/
	}
	
}



