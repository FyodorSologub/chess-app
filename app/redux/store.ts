import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/test-slice';
import chessBoardReducer from './slices/chess-board-slice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export const store = configureStore({
    reducer: {
        authReducer,
        chessBoardReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const dispatch_ = useDispatch<AppDispatch>;