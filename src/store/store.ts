import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './reducers/chatsReducer';
import chosenChatReducer from './reducers/chosenChatReducer';
import searchChatsReducer from './reducers/searchChatsReducer';
import chosenMessageReducer from './reducers/chosenMessageReducer';
import modalWindowReducer from './reducers/modalWindowReducer';


export const store = configureStore({
   reducer: {
      chats: chatsReducer,
      searchChats: searchChatsReducer,
      chosenChat: chosenChatReducer,
      chosenMessage: chosenMessageReducer,
      modalWindow: modalWindowReducer
   }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

