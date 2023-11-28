import { CellXCor, CellYCor, Cells, Ranks, Files } from "./interfaces";

const alphabet : readonly string[] = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

const ranks: Ranks = Object.fromEntries(
    Array.from({ length: 8 }, (_, index) => [String(index + 1) as CellXCor, { isHovered: false }])
) as Ranks;
  
const files: Files = Object.fromEntries(
    Array.from('ABCDEFGH', (yCor) => [yCor as CellYCor, { isHovered: false }])
) as Files;
  
const cells: Cells = Object.fromEntries(
    Array.from({ length: 8 }, (_, xCor) =>
      Array.from('ABCDEFGH', (yCor) => [
        `${yCor}${xCor + 1}` as `${CellYCor}${CellXCor}`,
        { isHovered: false },
      ])
    ).flat()
) as Cells;

enum PiecesVariants {
  Bishop = 'Bishop',
  King = 'King',
  Knight = 'Knight',
  Pawn = 'Pawn',
  Queen = 'Queen',
  Rook = 'Rook',
};

enum PiecesColors {
  white = 'white',
  black = 'black'
};

enum CellBgColor {
  Light = 'bg-piecesLight-custom',
  Dark = 'bg-piecesDark-custom',
};

export { alphabet, ranks, files, cells, PiecesVariants, PiecesColors, CellBgColor };