import * as Types from '@/app/lib/types/index';
import * as Constants from './index';

export const FILE_OFFSET : Types.FileOffset = {
    'Bishop' : ['C', 'F'],
    'King' : ['E'], 
    'Knight': ['B', 'G'], 
    'Pawn' : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
    'Queen' : ['D'],
    'Rook' : ['A', 'H'],
};
  
export const RANK_OFFSET : Types.RankOffset = {
    'White': '1',
    'WhitePawn' : '2',
    'Black': '8',
    'BlackPawn': '7'
};