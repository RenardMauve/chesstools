export default class ResourcesManager{

	constructor(runtime){
		this.runtime=runtime;
		this.data={};
	}

	async loadFile(name,filePath,middleware){
		const textFileUrl = await Utils.runtime.assets.getProjectFileUrl(filePath);
		const response = await fetch(textFileUrl);
		if(middleware)this.data[name]=middleware(response);
		const fetchedText = await response.text();
		this.data[name]=JSON.parse(fetchedText);
	}
	
	async loadTextFile(name,filePath){
		this.loadFile(name,filePath,this.extractTextFromResponse);
	}
	
	async loadJSON(name,filePath){
		this.loadFile(name,filePath,this.parseJSONFromResponse);
	}
	
	async extractTextFromResponse(response){
		return await response.text();
	}
	
	async parseJSONFromResponse(response){
		const responseText=this.extractTextFromResponse(response);
		return JSON.parse(responseText);
	}
	
	getData(resourceName){
		return this.data[resourceName];
	}
}