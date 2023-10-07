export default class EventEmitter{
	
	constructor(){
		this.callbacks={};
	}
	
	on(eventName,callback){
		if(this.callbacks[eventName]==undefined)this.callbacks[eventName]=[];
		this.callbacks[eventName].push(callback);
	}
	
	off(eventName,callback){
		const indexOfCallback=this.callbacks[eventName].indexOf(callback);
		if(indexOfCallback!=-1)this.callbacks[eventName].splice(indexOfCallback,1);
	}
	
	emit(eventName,...eventDatas){
		const callbacks=this.callbacks[eventName];
		for(let i=0;i<callbacks.length;i++)callbacks[i](...eventDatas);
	}
	
}