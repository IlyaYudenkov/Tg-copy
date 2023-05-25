import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState, IChat } from '../../types/types';


const chatsReducer = createSlice({
    name: 'chats',
    initialState: <ChatState>{
        chats: [],
        isLoading: false,
        error: '',
    },
    reducers: {
        chatsFetching(state) {
            state.isLoading = true;
        },
        chatsFetchingSuccess(state, action: PayloadAction<IChat[]>) {
            state.isLoading = false;
            state.error = '';
            state.chats = action.payload;
        },
        chatsFetchingError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        }
    }

});

export default chatsReducer.reducer;
export const chatsFetching = chatsReducer.actions;

