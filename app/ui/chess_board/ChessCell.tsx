"use client";

import { twMerge } from 'tailwind-merge'
import { CellXCor, CellYCor, Cell } from '@/app/lib/interfaces';
import { alphabet, CellBgColor } from '@/app/lib/constants';
import { useAppSelector, dispatch_ } from '@/app/redux/store';
import { hover, unhover } from '@/app/redux/slices/chess-board-slice';
import PieceRenderer from './PieceRenderer';

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
  const dispatch = dispatch_();

  const handleHover = () => dispatch(hover({ xCor, yCor, }));
  const handleUnhover = () => dispatch(unhover({ xCor, yCor, }));

  const className = twMerge(
    'relative aspect-square col-span-1 row-span-1 flex justify-center items-center p-1',
    getCellBgColor(xCor, yCor),
  );

  return (
    <p 
      className={ className } 
      onMouseEnter={ handleHover } onMouseLeave={ handleUnhover } 
    >
      <PieceRenderer xCor={ xCor } yCor={ yCor } />
    </p>
  );
};

export default ChessCell;