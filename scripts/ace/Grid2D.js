export default class Grid2D{
    constructor(cellWidth,cellHeight,offsetX,offsetY,horizontalGutter,verticalGutter){
        this.cellWidth=cellWidth;
        this.cellHeight=cellHeight;
        this.offsetX=offsetX || 0;
        this.offsetY=offsetY || 0;
        this.horizontalGutter=horizontalGutter || 0;
        this.verticalGutter=verticalGutter || 0;
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {{x:number,y:number}}
     */
    getGridCellFromPoint(x,y){
    }

    /**
     * 
     * @param {number} x 
     * @param {number} y 
     * @returns {{x:number,y:number}}
     */   
    getPositionOfGridCell(x,y){
    }

    /**
     * 
     * @param {number} startX 
     * @param {number} startY 
     * @param {number} endX 
     * @param {number} endY 
     * @param {(x,y,realX,realY)} callback 
     */
    forEachCell(startX,startY,endX,endY,callback){
        for(let i=startY;i<endY;i++)
            for(let j=startX;j<endX;j++)
                callback(j,i,this.getRealXFromGridX(j),this.getRealYFromGridY(i))
    }
}