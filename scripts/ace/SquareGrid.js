import Grid2D from "./Grid2D.js";


export default class SquareGrid extends Grid2D{
    constructor(cellWidth,cellHeight,offsetX,offsetY,horizontalGutter,verticalGutter){
        super(cellWidth,cellHeight,offsetX,offsetY,horizontalGutter,verticalGutter);
    }

    getGridXFromRealX(realX){
        return (realX-this.offsetX)/(this.cellWidth+this.horizontalGutter);
    }

    getGridYFromRealY(realY){
        return (realY-this.offsetY)/(this.cellHeight+this.verticalGutter);
    }

    getRealXFromGridX(gridX){
        return gridX*(this.cellWidth+this.horizontalGutter)+this.offsetX;
    }

    getRealYFromGridY(gridY){
        return gridY*(this.cellHeight+this.verticalGutter)+this.offsetY;
    }

    getGridCellFromPoint(x,y){
        return {
            x:this.getGridXFromRealX(x),
            y:this.getGridYFromRealY(y)
        }
    }

    getPositionOfGridCell(x,y){
        return {
            x:this.getRealXFromGridX(x),
            y:this.getRealYFromGridY(y)
        }
    }
}