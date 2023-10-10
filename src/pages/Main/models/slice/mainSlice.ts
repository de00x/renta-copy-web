import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MainSchema } from '../types/mainSchema';

const initialState: MainSchema = {
    city: undefined,
    isLoading: false,
    error: '',
};

export const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers: {
        setIsLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setProfileData: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: mainActions } = mainSlice;
export const { reducer: mainReducer } = mainSlice;
