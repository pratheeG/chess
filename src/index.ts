import { ChessPiece } from './chess-pieces/chess-piece';
import { King } from './chess-pieces/king';
import { Pawn } from './chess-pieces/pawn';
import { Queen } from './chess-pieces/queen';

export class ChessBoard {
    getPiece(piece: string) {
        let chessPiece: ChessPiece;
        switch (piece.toLowerCase()) {
            case 'pawn':
                chessPiece = new Pawn();
                break;
            case 'queen':
                chessPiece = new Queen();
                break;
            case 'king':
                chessPiece = new King();
                break;
            default:
                throw new Error('Invalid chess piece');
        }
        return chessPiece;
    }
}

// const inputStr = 'Pawn, G1';
// const [piece, position] = inputStr.split(',')
// const chessPiece: ChessPiece = new ChessBoard().getPiece(piece.trim());