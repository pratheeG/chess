import { Queen } from './queen';

describe('Chess Piece - Queen', () => {
    const queen = new Queen();
    it('Should get the moves of the Queen for the position', () => {
        const moves = queen.getMoves();
        expect(moves).toEqual([]);
    });
});