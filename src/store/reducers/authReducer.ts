import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IAuthorization } from '../../types/types';

const initialAuthId = Number(localStorage.getItem('userLoggedIn')) || 0;

const authReducer = createSlice({
    name: 'authId',
    initialState:<IAuthorization> {
        authId: initialAuthId ,
    },
    reducers:{
        setAuthId(state, action:PayloadAction<number>){
            state.authId = action.payload;
            localStorage.setItem('userLoggedIn', String(action.payload));
        },
        setNotAuthId(state, action:PayloadAction<number>){
            localStorage.removeItem('userLoggedIn');
            state.authId = action.payload;
        }
    }
});


export default authReducer.reducer;
export const {setAuthId, setNotAuthId} = authReducer.actions;