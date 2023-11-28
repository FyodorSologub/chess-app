import Image from "next/image";

const Bishop = () => {
    const color = 'black';
    const core_root = '@/public/chess_pieces';
    const root = core_root + color === 'black' ? '/black/bishop.svg' : '/white/bishop.svg';
    return (
        <Image
            src='/chess_pieces/black/bishop.svg'
            width='72'
            height='72'
            alt={ `a ${color} bishop` }
        />
    );
};

export default Bishop;