import { ChessBoard } from '../chess-board';
import { ChessPiece } from './chess-piece';

export class King extends ChessPiece {
    chessBoard: ChessBoard;
    directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];
    constructor(chessBoard: ChessBoard) {
        super();
        this.chessBoard = chessBoard;
    }

    getMoves(position: string): string {
        const moves: string[] = [];
        const boardRows = this.chessBoard.rows;
        const boardCols = this.chessBoard.cols;
        if(!this.chessBoard.isValidPosition(position)) {
            throw new Error('Not a valid position');
        }
        const colIdx = boardCols.indexOf(position[0]);
        const rowIdx = boardRows.indexOf(position[1]);
        this.directions.forEach(([row, col]) => {
            const newColIdx = colIdx + row;
            const newRowIdx = rowIdx + col;
            if (this.chessBoard.isValidMove(newColIdx, newRowIdx)) {
                moves.push(boardCols[newColIdx] + boardRows[newRowIdx]);
            }
        });
        return this.toString(moves);
    }
  }