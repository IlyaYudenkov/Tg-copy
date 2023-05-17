import { useDispatch } from 'react-redux';
import { rootReducer } from './reducers/rootReducer';
import { applyMiddleware, configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@reduxjs/toolkit/dist/devtoolsExtension';
import thunk from 'redux-thunk';


export const store = configureStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const useStoreDispatch = () => useDispatch<typeof store.dispatch>();
export type RootState = ReturnType<typeof store.getState>


