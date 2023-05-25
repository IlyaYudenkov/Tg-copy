import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const searchChatsReducer = createSlice({
    name: 'search',
    initialState: {
        searchInput: '',
    },
    reducers: {
        searchChats: (state, action: PayloadAction<string>) => {
            state.searchInput = action.payload;
        },
    }

});

export default searchChatsReducer.reducer;
export const { searchChats } = searchChatsReducer.actions;