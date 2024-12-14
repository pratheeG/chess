import { ChessBoard } from '../chess-board';
import { ChessPiece } from './chess-piece';

export class Pawn extends ChessPiece {
    chessBoard: ChessBoard;
    constructor(chessBoard: ChessBoard) {
        super();
        this.chessBoard = chessBoard;
    }

    getMoves(position: string): string {
        const moves: string[] = [];
        const boardRows = this.chessBoard.rows;
        const boardCols = this.chessBoard.cols;
        const colIdx = boardCols.indexOf(position[0]);
        const rowIdx = boardRows.indexOf(position[1]);
        if(!this.chessBoard.isValidPosition(position)) {
            throw new Error('Not a valid position');
        }
        if (this.chessBoard.isValidMove(colIdx, rowIdx + 1)) {
            moves.push(boardCols[colIdx] + boardRows[rowIdx + 1]);
        }
        return this.toString(moves);
    }
  }