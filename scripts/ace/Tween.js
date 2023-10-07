import Ace from "./Ace.js";

export default class Tween{

	
	constructor(objects){
		this.object=objects;
	}
	
	
	to(propertiesDescriptor,duration){
		this.propertiesDescriptor=propertiesDescriptor;
		this.duration=duration;
		this.modifiers={};
		this.elapsed=0;
		for(const key in propertiesDescriptor){
			this.modifiers[key]=(propertiesDescriptor[key]-this.object[key])/duration;
		}
		
		Ace.runtime.addEventListener("tick",()=>this.tick());
	}
	
	tick(){
		const dtInMs=Ace.runtime.dt*1000;
		this.elapsed+=dtInMs;
		if(this.elapsed>=this.duration){
			for(const key in this.propertiesDescriptor)this.object[key]=this.propertiesDescriptor[key];
			Ace.runtime.removeEventListener("tick",()=>this.tick());
		}else{
			for(const key in this.propertiesDescriptor)this.object[key]+=this.modifiers[key]*dtInMs;
		}
		
	}
	
	
	static get(object){
		return new Tween(object);
	}
}