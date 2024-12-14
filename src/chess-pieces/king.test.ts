import { ChessBoard } from '../chess-board';
import { King } from './king';

describe('Chess Piece - King', () => {
    const king = new King(new ChessBoard());
    it('Should get the moves of the King for the position A7', () => {
        const moves = king.getMoves('A7');
        expect(moves).toEqual(expect.arrayContaining(['A6', 'A8', 'B6', 'B7', 'B8']));
    });

    it('Should get the moves of the King for the position H8', () => {
        const moves = king.getMoves('H8');
        expect(moves).toEqual(expect.arrayContaining(['H7', 'G7', 'G8']));
    });

    it('Should get the moves of the King for the position D4', () => {
        const moves = king.getMoves('D4');
        expect(moves).toEqual(expect.arrayContaining(['C3', 'C4', 'C5', 'D3', 'D5', 'E3', 'E4','E5']));
    });
});