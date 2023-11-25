import Image from 'next/image';

const range = (n: number) => [...Array(n).keys()];
const getBoardSquares = () : JSX.Element[] => {
  const result : JSX.Element[] = [];

  range(8).forEach(i => range(8).forEach(j => {
    const start = (i+1) % 2 === 0 ? j+0 : j+1;
    let classes : string;

    switch(start%2===0) {
      case true:
        classes = 'aspect-square col-span-1 row-span-1 bg-piecesBlack-custom';
        break;
      case false: 
        classes = 'aspect-square col-span-1 row-span-1 bg-piecesWhite-custom';
        break;
    };

    result.push(<p className={ classes } key={ `i:${i};j:${j}` }></p>);
  }));

  return result;
};
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');

export default function Home() {
  return (
    <main className='aspect-square w-full h- md:h-full max-w-[607px] max-h-[640px]'>
      <section className='w-full rounded-md bg-white p-3 grid grid-cols-12 grid-rows-12 gap-0'>
        <div className='grid grid-cols-1 grid-rows-8 col-span-1 row-span-11 gap-0'>
          {
            range(8).reverse().map(i => <p className='flex justify-center items-center text-velvetBlack-custom antialiased font-thin col-span-1 row-span-1' key={ i+1 }>{ i+1 }</p>)
          }
        </div>
        <div className='aspect-square col-span-11 row-span-11 grid grid-cols-8 grid-rows-8 gap-0'>
          {
            getBoardSquares()
          }
        </div>
        <div className='col-span-full col-start-2 row-span-1 grid grid-cols-8 grid-rows-1 gap-0'>
          {
            range(8).map(i => <p className='flex justify-center items-center text-velvetBlack-custom antialiased font-thin col-span-1 row-span-1' key={ i }>{ alphabet[i] }</p>)
          }
        </div>
      </section>
    </main>
  );
};
