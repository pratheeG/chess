import { ChessBoard } from '../chess-board';
import { King } from './king';

describe('Chess Piece - King', () => {
    const king = new King(new ChessBoard());
    it('Should get the moves of the King for the position A7', () => {
        const moves = king.getMoves('A7');
        expect(moves).toBe('A6, A8, B6, B7, B8');
    });

    it('Should get the moves of the King for the position H8', () => {
        const moves = king.getMoves('H8');
        expect(moves).toBe('G7, G8, H7');
    });

    it('Should get the moves of the King for the position D4', () => {
        const moves = king.getMoves('D4');
        expect(moves).toBe('C3, C4, C5, D3, D5, E3, E4, E5');
    });
    it('Should throw error if the position is invalid', () => {
        try {
            king.getMoves('M8');
        } catch (error) {
            expect(error.message).toBe('Not a valid position');
        }
    });
});