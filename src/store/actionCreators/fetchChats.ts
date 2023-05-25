import axios from 'axios';
import { chatsFetching } from '../reducers/chatsReducer';
import { AppDispatch } from '../store';
import { IChat } from '../../types/types';


export const fetchChats = () => async (dispatch: AppDispatch) => {
    
    try {
        dispatch(chatsFetching.chatsFetching());
        const response = await axios.get<IChat[]>('http://localhost:3001/messages');
        dispatch(chatsFetching.chatsFetchingSuccess(response.data));

    } catch (e) {
        dispatch(chatsFetching.chatsFetchingError('Error'));
    }
};






