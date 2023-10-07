
class Ace{

	data={};
	
	initialize(runtime){
		this.runtime=runtime;
	}
	
	createInstance(objectTypeName,x,y,layerNameOrIndex,props){
		 x=x ? x : 0;
		y=y ? y : 0;
		const instance=this.runtime.objects[objectTypeName].createInstance(layerNameOrIndex?layerNameOrIndex:0,x,y);
		for(const key in props)if(key!="x" && key!="y")instance[key]=props[key];
		return instance;
	}
	
	getById(objectTypeName,id){
		return this.getInstanceByVarValue(objectTypeName,"id",id);
	}
	
	getInstance(objectTypeName){
		return this.runtime.objects[objectTypeName].getFirstInstance();
	}
	
	getInstanceBy(objectTypeName,evaluate){
		return this.runtime.objects[objectTypeName].getAllInstances().find(evaluate);
	}
	
	getInstanceByVarValue(objectTypeName,varName,varValue){
		return this.getInstanceBy(objectTypeName,(el)=>
			el.instVars[varName] && el.instVars[varName]===varValue
		);
	}
	
	getInstances(objectTypeName){
		return this.runtime.objects[objectTypeName].getAllInstances();
	}
	
	forAllInstances(objectTypeName,callback){
		const instances=this.getInstances(objectTypeName);
		instances.forEach(instance=>callback(instance));
	}
	
	callFunction(funcName,...params){
		return this.runtime.callFunction(funcName,params);
	}
	
	getVar(varName){
		if(this.runtime.globalVars[varName]!=undefined)return this.runtime.globalVars[varName];
		else throw new Error(`the variable ${varName} doesn't exists`);
	}
	
	setVar(varName,value){
		if(this.runtime.globalVars[varName]!=undefined)this.runtime.globalVars[varName]=value;
		else throw new Error(`the variable ${varName} doesn't exists`);
	}
	
	setSubClass(objectTypeName,classRef){
		if(!this.runtime.objects[objectTypeName])throw new Error(`object type "${objectTypeName}" cannot be found check if you spelled it correctly`);
		this.runtime.objects[objectTypeName].setInstanceClass(classRef);
	}
	
	
	setSubClasses(subClassesDefinition){
		for(const objectTypeNames in subClassesDefinition){
			objectTypeNames.split(",").forEach(
				objectTypeName=>{
					this.setSubClass(objectTypeName,subClassesDefinition[objectTypeNames]);
				}
			);
		}
	}
	
	getData(dataName){
		return this.data[dataName];
	}
	
	setData(dataName,value){
		this.data[dataName]=value;
	}
	
	async loadTextFile(name,filePath){
		const textFileUrl = await this.runtime.assets.getProjectFileUrl(filePath);
		const response = await fetch(textFileUrl);
		const fetchedText = await response.text();
		this.data[name]=JSON.parse(fetchedText);
	}
	
	async loadTextFiles(textFiles){
		for(const key in textFiles){
			await this.loadJSON(key,textFiles[key]);
		}
	}
	
	async loadJSON(name,filePath){
		const textFileUrl = await this.runtime.assets.getProjectFileUrl(filePath);
		const response = await fetch(textFileUrl);
		const fetchedText = await response.text();
		this.data[name]=JSON.parse(fetchedText);
	}
	
	
	async loadJSONs(jsons){
		for(const key in jsons){
			await this.loadJSON(key,jsons[key]);
		}
	}
}

var aceInstance=new Ace();

export default aceInstance;