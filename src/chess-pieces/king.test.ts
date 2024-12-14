import { ChessBoard } from '../chess-board';
import { King } from './king';

describe('Chess Piece - King', () => {
    let mockChessBoard: jest.Mocked<ChessBoard>;
    let king: King;

    beforeEach(() => {
        mockChessBoard = {
            rows: ['1', '2', '3', '4', '5', '6', '7', '8'],
            cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            isValidPosition: jest.fn(),
            isValidMove: jest.fn()
        } as unknown as jest.Mocked<ChessBoard>;

        king = new King(mockChessBoard);
        mockChessBoard.isValidPosition.mockReturnValue(true);
        mockChessBoard.isValidMove.mockImplementation((colIdx, rowIdx) => 
            colIdx >= 0 && colIdx < mockChessBoard.cols.length &&
            rowIdx >= 0 && rowIdx < mockChessBoard.rows.length
        );
    });
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
            mockChessBoard.isValidPosition.mockReturnValue(false);
            king.getMoves('M8');
        } catch (error) {
            expect(error.message).toBe('Not a valid position');
        }
    });
});