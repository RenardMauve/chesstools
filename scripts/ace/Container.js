export default class Container{
	constructor(elements){
		this.elements=elements || [];
	}
	
	addElement(element){
		this.elements.push(element);
	}
	
	set x(x){
		this.elements.forEach(element=>element.x=x);
	}
	
	moveY(yValue){
		this.elements.forEach(element=>element.y+=yValue);
	}
}