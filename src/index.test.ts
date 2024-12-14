import { ChessBoard } from '.';
import { King } from './chess-pieces/king';
import { Pawn } from './chess-pieces/pawn';
import { Queen } from './chess-pieces/queen';

describe('ChessBoard', () => {
    const chessBoard = new ChessBoard();
    describe('getPiece', () => {
        it('Should get the chess piece - Pawn instance', () => {
            const chessPiece = chessBoard.getPiece('Pawn');
            expect(chessPiece).toBeInstanceOf(Pawn);
        })

        it('Should get the chess piece - Queen instance', () => {
            const chessPiece = chessBoard.getPiece('Queen');
            expect(chessPiece).toBeInstanceOf(Queen);
        })

        it('Should get the chess piece - King instance', () => {
            const chessPiece = chessBoard.getPiece('King');
            expect(chessPiece).toBeInstanceOf(King);
        })

        it('Should throw error on passing the invalid peice', () => {
            try {
                chessBoard.getPiece('Horse')
            } catch (error) {
                expect(error.message).toBe('Invalid chess piece');
            }
        });
    })
})
