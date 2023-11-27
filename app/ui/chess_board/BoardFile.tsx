import { CellYCor } from "@/app/lib/interfaces";

const BoardFile = ({ yCor, ...rest }: { yCor: CellYCor } & React.HTMLProps<HTMLParagraphElement>): JSX.Element => {
    const className = 'flex justify-center items-center text-velvetBlack-custom antialiased font-thin col-span-1 row-span-1';

    return <p className={ className }>{ yCor }</p>;
};

export default BoardFile;