import {PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChosenChatState } from '../../types/chats';




const chosenChatReducer = createSlice({
    name: 'chosenChat',
    initialState: <ChosenChatState>{
        chosenChat: null,
    },
    reducers:{
        chatChoose:(state, action: PayloadAction <string>) => {
            state.chosenChat = action.payload;
        },
    }

});

export default chosenChatReducer.reducer;
export const {chatChoose} = chosenChatReducer.actions;