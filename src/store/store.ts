import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers/rootReducer';


const store = configureStore({
   reducer: rootReducer,
   
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
/*import { rootReducer } from './reducers/rootReducer';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk));

export const useStoreDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

*/


export default store;