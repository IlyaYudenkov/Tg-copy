import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChosenChatState } from '../../types/types';

const chosenChatReducer = createSlice({
    name: 'chosenChat',
    initialState: <ChosenChatState>{
        chosenChatUserFrom: null,
        chosenChatUserTo: null
    },
    reducers: {
        chatUserFromChoose: (state, action: PayloadAction<number>) => {
            state.chosenChatUserFrom = action.payload;
        },
        chatUserToChoose: (state, action: PayloadAction<number>) => {
            state.chosenChatUserTo = action.payload;
        }
    }

});

export default chosenChatReducer.reducer;
export const { chatUserFromChoose, chatUserToChoose } = chosenChatReducer.actions;