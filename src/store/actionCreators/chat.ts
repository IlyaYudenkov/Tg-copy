import axios from 'axios';
import chatReducer from '../reducers/chatReducer';
import { AppDispatch } from '../store';
import { IChat } from '../../types/chats';

export const fetchChats = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(chatReducer.actions.chatFetching());
        const response = await axios.get<IChat[]>('http://localhost:3001/messages');
        dispatch(chatReducer.actions.chatFetchingSuccess(response.data));

    } catch (e) {
        dispatch(chatReducer.actions.chatFetchingError('Error'));

    }
};
