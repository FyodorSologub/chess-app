"use client";

import { twMerge } from 'tailwind-merge'
import { CellXCor, CellYCor, Cell } from '@/app/lib/interfaces';
import { alphabet } from '@/app/lib/constants';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import { hover, unhover } from '@/app/redux/slices/chess-board-slice';

import PieceRenderer from './PieceRenderer';

enum CellBgColor {
  Light = 'bg-piecesLight-custom',
  Dark = 'bg-piecesDark-custom',
};

type CellBgColorFunc = (xCor : Cell['xCor'], yCor : Cell['yCor']) => CellBgColor.Light | CellBgColor.Dark;

const getCellBgColor: CellBgColorFunc = (xCor, yCor) => {
  const start = (Number(xCor)) % 2 === 0 ? alphabet.indexOf(yCor)+0 : alphabet.indexOf(yCor)+1;

  switch(start%2===0) {
    case true:
      return CellBgColor.Dark;
    case false: 
      return CellBgColor.Light;
    };
};

const ChessCell = ({ xCor, yCor, ...rest }: { xCor: CellXCor; yCor: CellYCor } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
  const isHovered = useAppSelector(state => state.chessBoardReducer.cells[`${yCor}${xCor}`].isHovered);
  const dispatch = dispatch_();

  const handleHover = () => dispatch(hover({ xCor, yCor, }));
  const handleUnhover = () => dispatch(unhover({ xCor, yCor, }));

  const className = twMerge(
    'relative aspect-square col-span-1 row-span-1 flex justify-center items-center p-1',
    getCellBgColor(xCor, yCor),
  );

  const span1Classes = twMerge(
    'absolute bottom-2 right-2',
    getCellBgColor(xCor, yCor) === CellBgColor.Light ? 'text-piecesDark-custom' : 'text-piecesLight-custom',
    isHovered === true ? 'block' : 'hidden',
  );

  const span2Classes = twMerge(
    'absolute top-2 left-2',
    getCellBgColor(xCor, yCor) === CellBgColor.Dark ? 'text-piecesLight-custom' : 'text-piecesDark-custom',
    isHovered === true ? 'block' : 'hidden',
  );

  return (
    <p 
      className={ className } 
      onMouseEnter={ handleHover } onMouseLeave={ handleUnhover } 
    >
      <PieceRenderer />
    </p>
  );
};

export default ChessCell;