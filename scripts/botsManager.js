import Array2D from "./Array2D.js";
import Globals from "./Globals.js";

var bots;

runOnStartup(async runtime=>{
	console.log("startup");
		runtime.addEventListener("beforeprojectstart",()=>loadScripts(runtime));
	}
);

async function loadScripts(runtime){
	const botsFileUrl=await runtime.assets.getProjectFileUrl("bots.json")
	const botsData=await fetch(botsFileUrl);
	const botsAsText=await botsData.text();
	const bots=JSON.parse(botsAsText);
	Globals.bots=new Array2D(111,1,bots);
	console.log(pickRandomBots());
}


function pickRandomBots(){
	console.log(Globals.bots.length);
	return Globals.bots[Math.floor(Math.random()*Globals.bots.length)];
}