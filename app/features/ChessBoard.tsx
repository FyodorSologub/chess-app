// types
import { File, Rank } from "../lib/types";

// constants
import { files, ranks, cells } from "../lib/constants";

// components
import BoardFile from "../ui/chess_board/BoardFile";
import BoardRank from "../ui/chess_board/BoardRank";
import ChessCell from "../ui/chess_board/ChessCell";

// arrays of Jsx elements
const boardRanks: JSX.Element[] = Object.keys(ranks).reverse().map(rank => <BoardRank key={rank} rank={rank as Rank} />);
const boardFiles: JSX.Element[] = Object.entries(files).map(([file, _]) => <BoardFile key={file} file={file as File} />);

const cellsArray = Object.keys(cells);

const sortedCellsArray = cellsArray.sort((a, b) => {
  const fileA = a[0];
  const rankA = parseInt(a[1]);

  const fileB = b[0];
  const rankB = parseInt(b[1]);

  if (rankA !== rankB) {
    return rankB - rankA;
  } else {
    return fileA.localeCompare(fileB);
  }
});

const chessCells: JSX.Element[] = sortedCellsArray.map(key => {
  const [file, rank] = key.split('') as [File, Rank];
  return <ChessCell key={key} file={file} rank={rank} />;
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