import Image from "next/image";
import { PiceColors } from "@/app/lib/types";

const Pawn : React.FC<{ color: PiceColors }> = ( { color } ) : JSX.Element => {
    const core_root = '/chess_pieces';
    const root = color === 'Black' ? '/black/pawn.svg' : '/white/pawn.svg';
    const path = core_root + root;
    return (
        <Image
            src={ path }
            width='72'
            height='72'
            alt={ `A ${color.toLowerCase()} pawn` }
        />
    );
};

export default Pawn;