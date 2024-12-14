import { ChessBoard } from '../chess-board';
import { ChessPiece } from './chess-piece';

export class Queen extends ChessPiece {
    chessBoard: ChessBoard;
    directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1],          [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];;
    constructor(chessBoard: ChessBoard) {
        super();
        this.chessBoard = chessBoard;
    }

    getMoves(position: string): string[] {
        const moves: string[] = [];
        const boardRows = this.chessBoard.rows;
        const boardCols = this.chessBoard.cols;
        const colIdx = boardCols.indexOf(position[0]);
        const rowIdx = boardRows.indexOf(position[1]);
        this.directions.forEach(([row, col]) => {
            let newColIdx = colIdx;
            let newRowIdx = rowIdx;
            while (true) {
                newColIdx += row;
                newRowIdx += col;
                if (this.chessBoard.isValidMove(newColIdx, newRowIdx)) {
                    moves.push(boardCols[newColIdx] + boardRows[newRowIdx]);
                } else {
                    break;
                }
            }
        });
        return moves;
    }
  }