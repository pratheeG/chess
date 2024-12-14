import { Chess } from './chess';
import { ChessBoard } from './chess-board';
import { King } from './chess-pieces/king';
import { Pawn } from './chess-pieces/pawn';
import { Queen } from './chess-pieces/queen';

describe('Chess', () => {
    let mockChessBoard: jest.Mocked<ChessBoard>;
    let chess: Chess;
    beforeEach(() => {
        mockChessBoard = {} as unknown as jest.Mocked<ChessBoard>;

        chess = new Chess(mockChessBoard);
    });
    describe('getPiece', () => {
        it('Should get the chess piece - Pawn instance', () => {
            const chessPiece = chess.getPiece('Pawn')
            expect(chessPiece).toBeInstanceOf(Pawn);
        })

        it('Should get the chess piece - King instance', () => {
            const chessPiece = chess.getPiece('King')
            expect(chessPiece).toBeInstanceOf(King);
        })

        it('Should get the chess piece - Queen instance', () => {
            const chessPiece = chess.getPiece('Queen')
            expect(chessPiece).toBeInstanceOf(Queen);
        })

        it('Should throw error on passing the invalid peice', () => {
            try {
                chess.getPiece('Horse');
            } catch (error) {
                expect(error.message).toBe('Invalid chess piece');
            }
        });
    })
})
