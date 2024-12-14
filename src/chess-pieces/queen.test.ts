import { ChessBoard } from '../chess-board';
import { Queen } from './queen';

describe('Chess Piece - King', () => {
    const queen = new Queen(new ChessBoard());
    it('Should get the moves of the Queen for the position A7', () => {
        const moves = queen.getMoves('A7');
        expect(moves).toEqual(expect.arrayContaining( [
            'A6', 'A5', 'A4', 'A3',
            'A2', 'A1', 'A8', 'B6',
            'C5', 'D4', 'E3', 'F2',
            'G1', 'B7', 'C7', 'D7',
            'E7', 'F7', 'G7', 'H7',
            'B8'
          ]));
    });


    it('Should get the moves of the Queen for the position D4', () => {
        const moves = queen.getMoves('D4');
        expect(moves).toEqual(expect.arrayContaining( [
            'C3', 'B2', 'A1', 'C4', 'B4',
            'A4', 'C5', 'B6', 'A7', 'D3',
            'D2', 'D1', 'D5', 'D6', 'D7',
            'D8', 'E3', 'F2', 'G1', 'E4',
            'F4', 'G4', 'H4', 'E5', 'F6',
            'G7', 'H8'
          ]));
    });
    it('Should throw error if the position is invalid', () => {
        try {
            queen.getMoves('M8');
        } catch (error) {
            expect(error.message).toEqual('Not a valid position');
        }
    });
});