import Image from "next/image";

const King = () => {
    const color = 'black';
    const core_root = '@/public/chess_pieces';
    const root = core_root + color === 'black' ? '/black/bishop.svg' : '/white/bishop.svg';
    return (
        <Image
            src='/chess_pieces/black/king.svg'
            width='72'
            height='72'
            alt={ `a ${color} king` }
        />
    );
};

export default King;