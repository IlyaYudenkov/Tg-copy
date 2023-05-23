import axios from 'axios';
import { chatFetching } from '../reducers/chatReducer';
import { AppDispatch } from '../store';
import { IChat } from '../../types/chats';

export const fetchChats = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(chatFetching.chatFetching);
        const response = await axios.get<IChat[]>('http://localhost:3001/messages');
        dispatch(chatFetching.chatFetchingSuccess(response.data));

    } catch (e) {
        dispatch(chatFetching.chatFetchingError('Error'));
    }
};
