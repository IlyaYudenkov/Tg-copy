import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from './reducers/chatsReducer';
import chosenChatReducer from './reducers/chosenChatReducer';
import searchChatsReducer from './reducers/searchChatsReducer';


export const store = configureStore({
   reducer: {
      chats: chatsReducer,
      searchChats: searchChatsReducer,
      chosenChat: chosenChatReducer
   }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

