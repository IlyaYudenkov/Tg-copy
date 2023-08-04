import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChosenMessageState } from '../../types/types';

const chosenMessageReducer = createSlice({
    name: 'chosenMessage',
    initialState: <ChosenMessageState>{
        chosenMessageId: null,
        chosenMessageUserFrom: null
    },
    reducers: {
        messageChooseId: (state, action: PayloadAction<number>) => {
            state.chosenMessageId = action.payload;
        },
        messageChooseUserFrom: (state, action: PayloadAction<number>) => {
            state.chosenMessageUserFrom = action.payload;
        },
    }

});

export default chosenMessageReducer.reducer;
export const { messageChooseId, messageChooseUserFrom } = chosenMessageReducer.actions;