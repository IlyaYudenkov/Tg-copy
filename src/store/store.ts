import { configureStore } from '@reduxjs/toolkit';
import chatReducer from './reducers/chatsReducer';
import chosenChatReducer from './reducers/chosenChatReducer';


export const store = configureStore({
   reducer: {
      chat: chatReducer,
      chosenChat: chosenChatReducer
   }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

