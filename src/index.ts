import { Chess } from './chess';
import { ChessBoard } from './chess-board';

const inputStr = 'Pawn, A1';
const [piece, position] = inputStr.split(',')
const chessPiece = new Chess(new ChessBoard()).getPiece(piece.trim());
const moves = chessPiece.getMoves(position.trim());
// eslint-disable-next-line no-console
console.log('moves ', moves);