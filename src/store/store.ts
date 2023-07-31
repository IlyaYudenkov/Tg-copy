import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './reducers/chatsReducer';
import chosenChatReducer from './reducers/chosenChatReducer';
import searchChatsReducer from './reducers/searchChatsReducer';
import chosenMessageReducer from './reducers/chosenMessageReducer';
import modalErrorReducer from './reducers/modalErrorReducer';


export const store = configureStore({
   reducer: {
      chats: chatsReducer,
      searchChats: searchChatsReducer,
      chosenChat: chosenChatReducer,
      chosenMessage: chosenMessageReducer,
      modalError: modalErrorReducer
   }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

