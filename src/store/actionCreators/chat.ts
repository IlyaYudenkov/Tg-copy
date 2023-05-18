import { Dispatch } from 'react';
import { ChatAction, ChatActionTypes } from '../../types/chats';
import axios from 'axios';

export const fetchChats = () => {
    return async (dispatch: Dispatch<ChatAction>) => {
        try {
            dispatch({ type: ChatActionTypes.FETCH_CHATS });
            const response = await axios.get('http://localhost:3001/messages');
            dispatch({ type: ChatActionTypes.FETCH_CHATS_SUCCESS, payload: response.data });
        } catch (error) {
            dispatch({ type: ChatActionTypes.FETCH_CHATS_ERROR, payload: 'An error occurred' });

        }
    };
};
