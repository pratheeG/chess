import { ChessBoard } from '../chess-board';
import { Pawn } from './pawn';

describe('Chess Piece - Pawn', () => {
    let mockChessBoard: jest.Mocked<ChessBoard>;
    let pawn: Pawn;

    beforeEach(() => {
        mockChessBoard = {
            rows: ['1', '2', '3', '4', '5', '6', '7', '8'],
            cols: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
            isValidPosition: jest.fn(),
            isValidMove: jest.fn()
        } as unknown as jest.Mocked<ChessBoard>;

        pawn = new Pawn(mockChessBoard);
        mockChessBoard.isValidPosition.mockReturnValue(true);
        mockChessBoard.isValidMove.mockImplementation((colIdx, rowIdx) => 
            colIdx >= 0 && colIdx < mockChessBoard.cols.length &&
            rowIdx >= 0 && rowIdx < mockChessBoard.rows.length
        );
    });
    it('Should get the moves of the Pawn for the position A1', () => {
        const moves = pawn.getMoves('A1');
        expect(moves).toBe('A2');
    });

    it('Should get the moves of the Pawn for the position B7', () => {
        const moves = pawn.getMoves('B7');
        expect(moves).toBe('B8');
    });

    it('Should return the empty moves if the pawn reaches the boundry', () => {
        const moves = pawn.getMoves('A8');
        expect(moves).toBe('');
    });

    it('Should throw error if the position is invalid', () => {
        try {
            mockChessBoard.isValidPosition.mockReturnValue(false);
            pawn.getMoves('M8');
        } catch (error) {
            expect(error.message).toBe('Not a valid position');
        }
    });
});