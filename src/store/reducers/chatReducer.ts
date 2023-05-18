import { ChatAction, ChatState, ChatActionTypes } from '../../types/chats';


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
};