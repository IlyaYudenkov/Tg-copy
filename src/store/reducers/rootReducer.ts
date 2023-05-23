import chatReducer  from './chatReducer';
import chosenChatReducer from './chosenChatReducer';


export const rootReducer = {
    chat: chatReducer,
    chosen: chosenChatReducer
};


