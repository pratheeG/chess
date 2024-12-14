import { ChessBoard } from '../chess-board';
import { Pawn } from './pawn';

describe('Chess Piece - Pawn', () => {
    const pawn = new Pawn(new ChessBoard());
    it('Should get the moves of the Pawn for the position A1', () => {
        const moves = pawn.getMoves('A1');
        expect(moves).toEqual(['A2']);
    });

    it('Should get the moves of the Pawn for the position B7', () => {
        const moves = pawn.getMoves('B7');
        expect(moves).toEqual(['B8']);
    });

    it('Should return the empty moves if the pawn reaches the boundry', () => {
        const moves = pawn.getMoves('A8');
        expect(moves).toEqual([]);
    });
});