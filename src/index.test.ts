import { Chess } from '.';
import { ChessBoard } from './chess-board';
import { Pawn } from './chess-pieces/pawn';

describe('ChessBoard', () => {
    const chess = new Chess(new ChessBoard());
    describe('getPiece', () => {
        it('Should get the chess piece - Pawn instance', () => {
            const chessPiece = chess.getPiece('Pawn')
            expect(chessPiece).toBeInstanceOf(Pawn);
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
