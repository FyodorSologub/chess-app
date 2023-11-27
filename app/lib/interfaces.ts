export type CellXCor = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8';
export type CellYCor = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';

export interface Cell {
    readonly xCor: CellXCor;
    readonly yCor: CellYCor;
};

export type Ranks = { [xCor in CellXCor]: { isHovered: boolean }; };
export type Files = { [yCor in CellYCor]: { isHovered: boolean }; };
export type Cells = { [key in `${CellYCor}${CellXCor}`]: { isHovered: boolean }; };

