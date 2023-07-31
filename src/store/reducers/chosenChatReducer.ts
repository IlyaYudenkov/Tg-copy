import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChosenChatState } from '../../types/types';

const chosenChatReducer = createSlice({
    name: 'chosenChat',
    initialState: <ChosenChatState>{
        chosenChat: null,
    },
    reducers: {
        chatChoose: (state, action: PayloadAction<number>) => {
            state.chosenChat = action.payload;
        },
    }

});

export default chosenChatReducer.reducer;
export const { chatChoose } = chosenChatReducer.actions;