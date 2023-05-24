import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState, IChat } from '../../types/types';


const chatsReducer = createSlice({
    name: 'chats',
    initialState: <ChatState>{
        chats: [],
        loading: false,
        error: '',
    },
    reducers: {
        chatsFetching(state) {
            state.loading = true;
        },
        chatsFetchingSuccess(state, action: PayloadAction<IChat[]>) {
            state.loading = false;
            state.error = '';
            state.chats = action.payload;
        },
        chatsFetchingError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }

});

export default chatsReducer.reducer;
export const chatsFetching = chatsReducer.actions;

