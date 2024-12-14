import { ChessBoard } from './chess-board';
import { ChessPiece } from './chess-pieces/chess-piece';
import { King } from './chess-pieces/king';
import { Pawn } from './chess-pieces/pawn';


export class Chess {
    chessBoard: ChessBoard;
    constructor(chessBoard: ChessBoard) {
        this.chessBoard = chessBoard;
    }
    getPiece(piece: string) {
        let chessPiece: ChessPiece;
        switch (piece.toLowerCase()) {
            case 'pawn':
                chessPiece = new Pawn(chessBoard);
                break;
            case 'king':
                    chessPiece = new King(chessBoard);
                    break;
            default:
                throw new Error('Invalid chess piece');
        }
        return chessPiece;
    }
}

const inputStr = 'Pawn, G1';
const [piece] = inputStr.split(',')
const chessBoard = new ChessBoard();
new Chess(chessBoard).getPiece(piece.trim());