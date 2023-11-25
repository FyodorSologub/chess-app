import React from 'react';
import Image from 'next/image';

const PawnBlack = () => {
  return (
    <Image
        src='/chess_pieces/black/pawn.svg'
        alt='a black pawn'
        width='72'
        height='72'
        className='aspect-square md:w-3/4'
    />
  );
};

export default PawnBlack;