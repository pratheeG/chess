import { King } from './king';

describe('Chess Piece - King', () => {
    const king = new King();
    it('Should get the moves of the king for the position', () => {
        const moves = king.getMoves();
        expect(moves).toEqual([]);
    });
});