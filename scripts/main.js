import Ace from "./Ace.js";
runOnStartup(runtime=>{
// 	Utils.runtime=runtime;
// 	Ace.initialize(runtime);
	
// 	Ace.setSubClasses({
// 		"rootSelect,chordSelect,formSelect,OptionsList":ExtendedList,
// 		"OptionsCheckbox":Checkbox
// 	});
	runtime.addEventListener("beforeprojectstart",()=>OnBeforeProjectStart(runtime));
	runtime.addEventListener("afterprojectstart",()=>OnAfterProjectStart(runtime));
	
});

async function OnBeforeProjectStart(runtime)
{
// 	await Ace.loadJSONs({
// 		"notes":"notes.json",
// 		"intervals":"intervals.json",
// 		"chords":"chords.json",
// 		"pianoChords":"pianoChords.json",
// 		"menu_buttons":"ui/menu_buttons.json"
// 	});
}

async function OnAfterProjectStart(runtime){
	
}