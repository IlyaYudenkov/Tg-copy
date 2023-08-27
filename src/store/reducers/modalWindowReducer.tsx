import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const modalWindowReducer = createSlice({
    name: 'modalWindow',
    initialState: {
        openWindow: false,
        textWindow: ''
    },
    reducers: {
        modalWindowState: (state, action: PayloadAction<boolean>) => {
            state.openWindow = action.payload;
        },
        modalWindowText:(state, action: PayloadAction<string>) => {
            state.textWindow = action.payload;
        }
    }

});

export default modalWindowReducer.reducer;
export const { modalWindowState, modalWindowText } = modalWindowReducer.actions;