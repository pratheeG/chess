import { ChessBoard } from '../chess-board';
import { Pawn } from './pawn';

describe('Chess Piece - Pawn', () => {
    const pawn = new Pawn(new ChessBoard());
    it('Should get the moves of the Pawn for the position A1', () => {
        const moves = pawn.getMoves('A1');
        expect(moves).toBe('A2');
    });

    it('Should get the moves of the Pawn for the position B7', () => {
        const moves = pawn.getMoves('B7');
        expect(moves).toBe('B8');
    });

    it('Should return the empty moves if the pawn reaches the boundry', () => {
        const moves = pawn.getMoves('A8');
        expect(moves).toBe('');
    });

    it('Should throw error if the position is invalid', () => {
        try {
            pawn.getMoves('M8');
        } catch (error) {
            expect(error.message).toBe('Not a valid position');
        }
    });
});