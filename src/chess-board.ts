export class ChessBoard {
    rows: string[];
    cols: string[];
  
    constructor() {
        this.rows = ['1', '2', '3', '4', '5', '6', '7', '8'];
        this.cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    }
  
    isValidMove(colIdx: number, rowIdx: number): boolean {
        return colIdx >= 0 && colIdx < 8 && rowIdx >= 0 && rowIdx < 8;
    }
    isValidPosition(position: string) {
        const colIdx = this.cols.indexOf(position[0]);
        const rowIdx = this.rows.indexOf(position[1]);
        return colIdx >= 0 && rowIdx >= 0;
    }
}
