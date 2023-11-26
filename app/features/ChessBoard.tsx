// utils
import { range } from '@/app/lib/utils';

// components
import BoardFile from "../ui/chess_board/BoardRank";
import BoardRank from "../ui/chess_board/BoardFile";
import ChessCell from "../ui/chess_board/ChessCell";



const ChessBoard = () : JSX.Element => {
  return (
    <section className='aspect-square w-full md:max-w-[607px] md:max-h-[640px] rounded-md bg-white p-3 grid grid-cols-12 grid-rows-12 gap-0'>
        <div className='grid grid-cols-1 grid-rows-8 col-span-1 row-span-11 gap-0'>
          {
            //range(8).reverse().map(i => <p className='flex justify-center items-center text-velvetBlack-custom antialiased font-thin col-span-1 row-span-1' key={ i+1 }>{ i+1 }</p>)
          }
        </div>
        <div className='aspect-square col-span-11 row-span-11 grid grid-cols-8 grid-rows-8 gap-0'>
          {
            //getBoardSquares()
          }
        </div>
        <div className='col-span-full col-start-2 row-span-1 grid grid-cols-8 grid-rows-1 gap-0'>
          {
            //range(8).map(i => <p className='flex justify-center items-center text-velvetBlack-custom antialiased font-thin col-span-1 row-span-1' key={ i }>{ alphabet[i] }</p>)
          }
        </div>
    </section>
  );
};

export default ChessBoard;