export abstract class ChessPiece {
    rows: string[];
    cols: string[];
  
    constructor() {
        this.rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
        this.cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    }
  
    abstract getMoves(): string[];
  }