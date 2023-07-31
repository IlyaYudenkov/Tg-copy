import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChosenMessageState } from '../../types/types';

const chosenMessageReducer = createSlice({
    name: 'chosenMessage',
    initialState: <ChosenMessageState>{
        chosenMessage: null,
    },
    reducers: {
        messageChoose: (state, action: PayloadAction<number>) => {
            state.chosenMessage = action.payload;
        },
    }

});

export default chosenMessageReducer.reducer;
export const { messageChoose } = chosenMessageReducer.actions;