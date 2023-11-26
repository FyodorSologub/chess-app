import { twMerge } from 'tailwind-merge'

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

interface Cell {
  readonly xCor: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  readonly yCor: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
};

const ChessCell = (props: Cell) : JSX.Element => {
  const className = twMerge(
    'aspect-square col-span-1 row-span-1 flex justify-center items-center',
    getCellBgColor(props.xCor, props.yCor)
  );

  return (
    <p className={ className } key={ `${props.xCor}:${props.yCor}` }></p>
  );
};

export default ChessCell;