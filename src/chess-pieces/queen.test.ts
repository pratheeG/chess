import { ChessBoard } from '../chess-board';
import { Queen } from './queen';

describe('Chess Piece - King', () => {
    let mockChessBoard: jest.Mocked<ChessBoard>;
    let queen: Queen;

    beforeEach(() => {
        mockChessBoard = {
            rows: ['1', '2', '3', '4', '5', '6', '7', '8'],
            cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            isValidPosition: jest.fn(),
            isValidMove: jest.fn()
        } as unknown as jest.Mocked<ChessBoard>;

        queen = new Queen(mockChessBoard);
        mockChessBoard.isValidPosition.mockReturnValue(true);
        mockChessBoard.isValidMove.mockImplementation((colIdx, rowIdx) => 
            colIdx >= 0 && colIdx < mockChessBoard.cols.length &&
            rowIdx >= 0 && rowIdx < mockChessBoard.rows.length
        );
    });
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
            mockChessBoard.isValidPosition.mockReturnValue(false);
            queen.getMoves('M8');
        } catch (error) {
            expect(error.message).toBe('Not a valid position');
        }
    });
});