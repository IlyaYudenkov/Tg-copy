import { rootReducer } from './reducers/rootReducer';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));

export const useStoreDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>



export default store;


