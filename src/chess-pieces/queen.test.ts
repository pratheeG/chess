import { ChessBoard } from '../chess-board';
import { Queen } from './queen';

describe('Chess Piece - King', () => {
    const queen = new Queen(new ChessBoard());
    it('Should get the moves of the Queen for the position A7', () => {
        const moves = queen.getMoves('A7');
        expect(moves).toBe('A1, A2, A3, A4, A5, A6, A8, B6, B7, B8, C5, C7, D4, D7, E3, E7, F2, F7, G1, G7, H7');
    });


    it('Should get the moves of the Queen for the position D4', () => {
        const moves = queen.getMoves('D4');
        expect(moves).toBe('A1, A4, A7, B2, B4, B6, C3, C4, C5, D1, D2, D3, D5, D6, D7, D8, E3, E4, E5, F2, F4, F6, G1, G4, G7, H4, H8');
    });
    it('Should throw error if the position is invalid', () => {
        try {
            queen.getMoves('M8');
        } catch (error) {
            expect(error.message).toBe('Not a valid position');
        }
    });
});