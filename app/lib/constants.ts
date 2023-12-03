import { range, getUpperLetter, getCellColor, getRank } from './utils';
import { 
    File, Rank, Files, Ranks, Cells, 
    PieceVariant, PieceVariants, PiceColors, 
    PieceQuantity, PieceData, DefaultPositions, Pieces
} from './types';

export const files = Object.fromEntries(range(8).map(i => { 
    return [getUpperLetter(i), { isHovered: false }];
 })) as Files;

export const ranks = Object.fromEntries(range(8).map(i => { 
    return [String(i+1), { isHovered: false }];
 })) as Ranks;

const cells_raw : Cells = Object.fromEntries(
    Object.keys(files).map(file => 
        Object.keys(ranks).map(rank => 
            [`${file}${rank}`, { isHovered: false, piece: null, pieceColor: null, color: getCellColor(file as File, rank as Rank) }])
    ).flat()
);

export const pieceVariants = Object.fromEntries(
    ['Bishop', 'King', 'Knight', 'Pawn', 'Queen', 'Rook'].map(el => [el as PieceVariant, el])
) as PieceVariants;

export const pieceQuantity = Object.fromEntries(
    Object.keys(pieceVariants).map(variant => {
        let quantity;
        switch(variant) {
            case 'Bishop':
                quantity = 2;
                break;
            case 'King':
                quantity = 1;
                break;
            case 'Knight':
                quantity = 2;
                break;
            case 'Pawn':
                quantity = 8;
                break;
            case 'Queen':
                quantity = 1;
                break;
            case 'Rook':
                quantity = 2;
                break;
        };
        return [variant, quantity]
    })
) as PieceQuantity;

export const defaultPositions = Object.fromEntries(
    Object.keys(pieceVariants).map(variant => {
        let positions : File[] = [];
        switch(variant) {
            case 'Bishop':
                positions = ['C', 'F'];
                break;
            case 'King':
                positions = ['E'];
                break;
            case 'Knight':
                positions = ['B', 'G'];
                break;
            case 'Pawn':
                positions = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
                break;
            case 'Queen':
                positions = ['D'];
                break;
            case 'Rook':
                positions = ['A', 'H'];
                break;
        };
        return [variant, positions];
    })
) as DefaultPositions;

export const pieces: Pieces = Object.fromEntries(
    ['White', 'Black'].flatMap(color =>
      Object.keys(pieceVariants).flatMap(variant =>
        range(pieceQuantity[variant as PieceVariant], 1).map(id => {
          const key = `${color as PiceColors}${variant as PieceVariant}${id as number}`;
          const value = { 
            type: variant as PieceVariant, color: color as PiceColors, 
            isDeposed: false, 
            file: defaultPositions[variant as PieceVariant][id-1], 
            rank: getRank(color as PiceColors, variant as PieceVariant), 
        } as PieceData;
          return [key, value];
        })
      )
    )
) as Pieces;

Object.values(pieces).forEach(data => {
    cells_raw[`${data['file'] as File}${data['rank'] as Rank}`].piece = data['type'];
    cells_raw[`${data['file'] as File}${data['rank'] as Rank}`].pieceColor = data['color'];
});

export const cells = { ...cells_raw };