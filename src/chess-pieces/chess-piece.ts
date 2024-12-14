export abstract class ChessPiece {
    abstract getMoves(position: string): string;
    toString(moves: string[]) {
      return moves.sort().join(', ');
    }
  }