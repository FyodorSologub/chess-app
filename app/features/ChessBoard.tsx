// constants
import { files, ranks, cells } from "../lib/constants";

// interfeces and types
import { CellXCor, CellYCor } from '@/app/lib/interfaces';

// components
import BoardFile from "../ui/chess_board/BoardFile";
import BoardRank from "../ui/chess_board/BoardRank";
import ChessCell from "../ui/chess_board/ChessCell";

// arrays of Jsx elements
const boardRanks: JSX.Element[] = Object.entries(ranks).map(([xCor, _]) => <BoardRank key={xCor} xCor={xCor as CellXCor} />);
const boardFiles: JSX.Element[] = Object.entries(files).map(([yCor, _]) => <BoardFile key={yCor} yCor={yCor as CellYCor} />);
const chessCells: JSX.Element[] = Object.entries(cells).map(([key, _]) => {
  const [yCor, xCor] = key.split('') as [CellYCor, CellXCor];
  return <ChessCell key={key} xCor={xCor} yCor={yCor} />;
});


const ChessBoard = () : JSX.Element => {
  return (
    <section className='aspect-square w-full h-full md:max-w-[640px] md:max-h-[640px] rounded-md bg-white p-3 grid grid-cols-12 grid-rows-12 gap-0'>
        <div className='grid grid-cols-1 grid-rows-8 col-span-1 row-span-11 gap-0'>
          { boardRanks }
        </div>
        <div className='aspect-square col-span-11 row-span-11 grid grid-cols-8 grid-rows-8 gap-0'>
          { chessCells }
        </div>
        <div className='col-span-full col-start-2 row-span-1 grid grid-cols-8 grid-rows-1 gap-0'>
          { boardFiles }
        </div>
    </section>
  );
};

export default ChessBoard;