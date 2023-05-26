import chatReducer from './chatsReducer';
import chosenChatReducer from './chosenChatReducer';


export const rootReducer = {
    chat: chatReducer,
    chosen: chosenChatReducer
};


