export default class Array1D{
	constructor(data){
		this.data=data?data:[];
	}
	
	pickRandom(){
		return this.data[Math.floor(Math.random()*this.data.length)];
	}
	
}