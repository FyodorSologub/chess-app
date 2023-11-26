import { twMerge } from 'tailwind-merge'
import { Cell } from '@/app/lib/interfaces';

enum CellBgColor {
  Light = 'bg-piecesLight-custom',
  Dark = 'bg-piecesDark-custom',
};

type CellBgColorFunc = (xCor : Cell['xCor'], yCor : Cell['yCor']) => CellBgColor.Light | CellBgColor.Dark;

const getCellBgColor: CellBgColorFunc = (xCor, yCor) => {
  const start = (xCor+1) % 2 === 0 ? yCor+0 : yCor+1;

  switch(start%2===0) {
    case true:
      return CellBgColor.Dark;
    case false: 
      return CellBgColor.Light;
    };
};

const ChessCell = (xCor: Cell['xCor'], yCor: Cell['yCor']) : JSX.Element => {
  const className = twMerge(
    'aspect-square col-span-1 row-span-1 flex justify-center items-center',
    getCellBgColor(xCor, yCor)
  );

  return (
    <p className={ className } key={ `${xCor}:${yCor}` }></p>
  );
};

export default ChessCell;