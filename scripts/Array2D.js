export default class Array2D{
    
    /**
     * 
     * @param {number} width 
     * @param {number} height 
     * @param {*[]} data 
     */
    constructor(width,height,data){
        this.width=width;
        this.height=height;
        this.data=data || [];
    }

    /**
     * 
     * @returns {*[]}
     */
    getData(){
        return this.data.slice();
    }

    getWidth(){
        return this.width;
    }

    getHeight(){
        return this.height;
    }

    getTotalSize(){
        return this.getWidth()*this.getHeight();
    }

    swap(x1,y1,x2,y2){
        let valueAtX1Y1=this.getAt(x1,y1);
        this.setAt(x1,y1,this.getAt(x2,y2));
        this.setAt(x2,y2,valueAtX1Y1);
    }

    xYToX(x,y){
        return y*this.width+x;
    }

    xToXY(x){
        return {
            x:x%this.width,
            y:Math.floor(x/this.width)
        }
    }

    /**
     * 
     * @param {*} value 
     */
    fillWith(value){
        for(let i=0;i<this.width*this.height;i++)this.data[i]=value;
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {*}
     */
    getAt(x,y){
        if(this.isInArray(x,y))return this.data[y*this.width+x];
        throw new Error(`[${x},${y}] is out of array(${this.width},${this.height})`);
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @param {*} value 
     */
    setAt(x,y,value){
        if(this.isInArray(x,y))this.data[y*this.width+x]=value;
        else throw new Error(`[${x},${y}] is out of array(${this.width},${this.height})`);
    }

    /**
     * 
     * @param {number} yLine 
     * @returns {*[]}
     */
    getLineAt(yLine){
        if(this.isYInArray(yLine))return this.getData().slice(yLine*this.width,(yLine+1)*this.width);
        else throw new Error(`line ${yLine} is out of array(${this.width},${this.height})`)
    }

    /**
     * 
     * @param {number} xColumn 
     * @returns {*[]}
     */
    getColumnAt(xColumn){
        if(!this.isXInArray(xColumn))throw new Error(`column ${xColumn} is out of array(${this.width},${this.height})`)
        let col=[];
        for(let i=0;i<this.height;i++)col.push(this.getAt(xColumn,i));
        return col;
    }

    /**
     * @param {number} x 
     * @returns {boolean}
     */
    isXInArray(x){
        return x >= 0 && x < this.width;
    }

    /**
     * @param {number} y 
     * @returns {boolean}
     */
    isYInArray(y){
        return y >= 0 && y < this.height;
    }

    /**
     * @param {number} x 
     * @param {number} y 
     * @returns {boolean}
     */
    isInArray(x,y){
        return this.isXInArray(x) && this.isYInArray(y);
    }

    /**
     * 
     * @param {(x:number,y:number,value:*)} callback 
     */
    forEach(callback){
        for(let i=0;i<this.height;i++){
            for(let j=0;j<this.height;j++){
                callback(j,i,this.getAt(j,i));
            }
        }
    }

    /**
     * 
     * @param {number} width 
     * @param {number} height 
     * @param {*} fillValue 
     * @returns {Array2D}
     */
    static createArrayFilledWith(width,height,fillValue){
        var arr=new Array2D(width,height);
        arr.fillWith(fillValue);
        return arr;
    }

    /**
     * 
     * @param {number} width 
     * @param {number} height 
     * @param {(x:number,y:number)} callback 
     * @returns {Array2D}
     */
    static createArrayFilledWithCallback(width,height,callback){
        var arr=new Array2D(width,height);
        arr.forEach((x,y)=>arr.setAt(x,y,callback(x,y)));
        return arr;
    }
	
	
	pickRandom(){
        return this.data[Math.round(Math.random()*this.getTotalSize())];
    }

    shuffle(){
        let currentIndex = this.getTotalSize();
        let randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
          console.log(currentIndex,randomIndex);
          // And swap it with the current element.
          let currentIndexAsXY=this.xToXY(currentIndex);
          let randomIndexAsXY=this.xToXY(randomIndex);

          console.log(currentIndexAsXY,randomIndexAsXY)
          this.swap(currentIndexAsXY.x,currentIndexAsXY.y,randomIndexAsXY.x,randomIndexAsXY.y);
        }
      
    }

    /**
     * 
     * @returns {string}
     */
    toString(){
        let stringRepr="Array2D\n"

        for(let i=0;i<this.height;i++){
            stringRepr+=this.getData().slice(i*this.width,(i+1)*this.width).join(" , ")+"\n";
        }

        return stringRepr;
    }
}