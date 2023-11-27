import { twMerge } from 'tailwind-merge'
import { CellXCor, CellYCor, Cell } from '@/app/lib/interfaces';

enum CellBgColor {
  Light = 'bg-piecesLight-custom',
  Dark = 'bg-piecesDark-custom',
};

type CellBgColorFunc = (xCor : Cell['xCor'], yCor : Cell['yCor']) => CellBgColor.Light | CellBgColor.Dark;

const getCellBgColor: CellBgColorFunc = (xCor, yCor) => {
  const alphabet : readonly string[] = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  const start = (Number(xCor)) % 2 === 0 ? alphabet.indexOf(yCor)+0 : alphabet.indexOf(yCor)+1;

  switch(start%2===0) {
    case true:
      return CellBgColor.Dark;
    case false: 
      return CellBgColor.Light;
    };
};

const ChessCell = ({ xCor, yCor, ...rest }: { xCor: CellXCor; yCor: CellYCor } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
  const className = twMerge(
    'aspect-square col-span-1 row-span-1 flex justify-center items-center',
    getCellBgColor(xCor, yCor)
  );

  return (
    <p className={ className } />
  );
};

export default ChessCell;