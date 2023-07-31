import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const modalErrorReducer = createSlice({
    name: 'modalError',
    initialState: {
        openError: false,
    },
    reducers: {
        modalErrorState: (state, action: PayloadAction<boolean>) => {
            state.openError = action.payload;
        },
    }

});

export default modalErrorReducer.reducer;
export const { modalErrorState } = modalErrorReducer.actions;