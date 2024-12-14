import { Chess } from '.';
import { ChessBoard } from './chess-board';
import { King } from './chess-pieces/king';
import { Pawn } from './chess-pieces/pawn';

describe('ChessBoard', () => {
    const chess = new Chess(new ChessBoard());
    describe('getPiece', () => {
        it('Should get the chess piece - Pawn instance', () => {
            const chessPiece = chess.getPiece('Pawn')
            expect(chessPiece).toBeInstanceOf(Pawn);
        })

        it('Should get the chess piece - King instance', () => {
            const chessPiece = chess.getPiece('King')
            expect(chessPiece).toBeInstanceOf(King);
        })


        it('Should throw error on passing the invalid peice', () => {
            try {
                chess.getPiece('Horse');
            } catch (error) {
                expect(error.message).toBe('Invalid chess piece');
            }
        });
    })
})
