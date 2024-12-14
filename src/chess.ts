import { ChessBoard } from './chess-board';
import { King } from './chess-pieces/king';
import { Pawn } from './chess-pieces/pawn';
import { Queen } from './chess-pieces/queen';

export class Chess {
    chessBoard: ChessBoard;
    constructor(chessBoard: ChessBoard) {
        this.chessBoard = chessBoard;
    }
    getPiece(piece: string) {
        const pieceMap = {
            pawn: Pawn,
            king: King,
            queen: Queen,
        };
        const PieceClass = pieceMap[piece.toLowerCase()];
        if (!PieceClass) throw new Error('Invalid chess piece');
        return new PieceClass(this.chessBoard);
    }
}
