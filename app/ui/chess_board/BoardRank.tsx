import { CellXCor } from "@/app/lib/interfaces";

const BoardRank = ({ xCor, ...rest }: { xCor: CellXCor } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
    const className = 'flex justify-center items-center text-velvetBlack-custom antialiased font-thin col-span-1 row-span-1';

    return <p className={ className }>{ xCor }</p>;
};

export default BoardRank;