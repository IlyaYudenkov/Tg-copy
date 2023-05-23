import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState, IChat } from '../../types/chats';


const chatReducer = createSlice({
    name: 'chats',
    initialState: <ChatState>{
        chats: [],
        loading: false,
        error: '',
    },
    reducers: {
        chatFetching(state) {
            state.loading = true;
        },
        chatFetchingSuccess(state, action: PayloadAction<IChat[]>) {
            state.loading = false;
            state.error = '';
            state.chats = action.payload;
        },
        chatFetchingError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        }
    }

});

export default chatReducer.reducer;
export const chatFetching = chatReducer.actions;

