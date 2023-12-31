import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './reducers/chatsReducer';
import chosenChatReducer from './reducers/chosenChatReducer';
import searchChatsReducer from './reducers/searchChatsReducer';
import chosenMessageReducer from './reducers/chosenMessageReducer';
import authReducer from './reducers/authReducer';


export const store = configureStore({
   reducer: {
      auth: authReducer,
      chats: chatsReducer,
      searchChats: searchChatsReducer,
      chosenChat: chosenChatReducer,
      chosenMessage: chosenMessageReducer,
   }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

