export default class Checkbox extends ISpriteInstance{
	constructor(){
		super();
	}
	
	isChecked(){
		return this.instVars["checked"]? this.instVars["checked"]:false;
	}
}