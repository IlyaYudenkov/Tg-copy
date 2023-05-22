import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ChatState, IChat } from '../../types/chats';


const chatReducer = createSlice({
    name: 'chats',
    initialState: <ChatState> {
        chats: [],
        loading: false,
        error: '',
    },
    reducers:{
        chatFetching(state){
            state.loading = true;
        },
        chatFetchingSuccess(state,action: PayloadAction<IChat[]>){
            state.loading = false;
            state.error = '';
            state.chats = action.payload;
        },
        chatFetchingError(state, action: PayloadAction<string>){
            state.loading = false;
            state.error = action.payload;
        }
    }

});

export default chatReducer;

/*
const initialState: ChatState = {
    chats: [],
    loading: false,
    error: null
};


export const chatReducer = (state = initialState, action: ChatAction): ChatState => {
    switch (action.type) {
        case ChatActionTypes.FETCH_CHATS:
            return { loading: true, error: null, chats: [] };
        case ChatActionTypes.FETCH_CHATS_SUCCESS:
            return { loading: false, error: null, chats: action.payload };
        case ChatActionTypes.FETCH_CHATS_ERROR:
            return { loading: false, error: action.payload, chats: [] };


        default:
            return state;
    }
};*/