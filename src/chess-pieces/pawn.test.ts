import { Pawn } from './pawn';

describe('Chess Piece - Pawn', () => {
    const pawn = new Pawn();
    it('Should get the moves of the Pawn for the position', () => {
        const moves = pawn.getMoves();
        expect(moves).toEqual([]);
    });
});