import { ChessBoard } from './chess-board';
import { ChessPiece } from './chess-pieces/chess-piece';
import { King } from './chess-pieces/king';
import { Pawn } from './chess-pieces/pawn';
import { Queen } from './chess-pieces/queen';


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
            case 'queen':
                chessPiece = new Queen(chessBoard);
                break;
            default:
                throw new Error('Invalid chess piece');
        }
        return chessPiece;
    }
}

const inputStr = 'Pawn, A1';
const [piece, position] = inputStr.split(',')
const chessBoard = new ChessBoard();
const chessPiece = new Chess(chessBoard).getPiece(piece.trim());
const moves = chessPiece.getMoves(position.trim());
// eslint-disable-next-line no-console
console.log('moves ', moves);