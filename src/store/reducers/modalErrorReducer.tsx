import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const modalErrorReducer = createSlice({
    name: 'modalError',
    initialState: {
        openError: false,
        textError: ''
    },
    reducers: {
        modalErrorState: (state, action: PayloadAction<boolean>) => {
            state.openError = action.payload;
        },
        modalErrorText:(state, action: PayloadAction<string>) => {
            state.textError = action.payload;
        }
    }

});

export default modalErrorReducer.reducer;
export const { modalErrorState, modalErrorText } = modalErrorReducer.actions;