import Ace from "./Ace.js";

export default class Prefab{
	constructor(definition){
		this.definition=definition;
	}
	
	createInstance(layerNameOrIndex,parentPropsOverride){
		
		function iterateDefinition(currentDefinition,parent){
			layerNameOrIndex=layerNameOrIndex?layerNameOrIndex:0;
			const parentX=parent?parent.x:0;
			const parentY=parent?parent.y:0;
			
			const currentInstanceX=currentDefinition.props && currentDefinition.props.x ? parentX+currentDefinition.props.x:parentX;
			const currentInstanceY=currentDefinition.props && currentDefinition.props.y ? parentY+currentDefinition.props.y:parentY;
			
		 	const currentInstance=Ace.createInstance(currentDefinition.type,currentInstanceX,currentInstanceY,layerNameOrIndex,currentDefinition.props);
			if(currentDefinition.children){
				currentDefinition.children.forEach(child=>{
					currentInstance.addChild(
						iterateDefinition(child,currentInstance),
						{
							transformX:true,
							transformY:true,
							transformWidth:true,
							transformHeight:true,
							transformAngle:true,
							transformZElevation:true,
							destroyWithParent:true,

						}
					);
				});
			}
			return currentInstance;
		}
		
		let definitionCopy=JSON.parse(JSON.stringify(this.definition));
		if(parentPropsOverride){
			if(!definitionCopy.props)definitionCopy.props={}
			for(const key in parentPropsOverride)definitionCopy.props[key]=parentPropsOverride[key];
		}
		return iterateDefinition(definitionCopy);
	}
}