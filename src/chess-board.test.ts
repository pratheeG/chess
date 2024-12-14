import { ChessBoard } from './chess-board';

describe('ChessBoard', () => {
    let chessBoard: ChessBoard;
    beforeEach(() => {
        chessBoard = new ChessBoard();
    })

    describe('isValidMove', () => {

    it('Should return true if the move is valid', () => {
        expect(chessBoard.isValidMove(0, 2)).toBe(true);
    })
    
    it('Should return false if the move is not valid', () => {
        expect(chessBoard.isValidMove(0, 8)).toBe(false);
    })
});
describe('isValidPosition', () => {
    it('Should return true if the piece position is valid', ()=> {
        expect(chessBoard.isValidPosition('A1')).toBe(true);
    });
    it('Should return true if the piece position is invalid', ()=> {
        expect(chessBoard.isValidPosition('I1')).toBe(false);
    });
})
})
