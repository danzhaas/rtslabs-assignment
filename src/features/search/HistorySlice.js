import { createSlice } from '@reduxjs/toolkit';

export const historySlice = createSlice({
    name: 'history',
    initialState: {
        value:[],
    },
    reducers: {
        addSearch: (state, action) => {
            state.value = state.value.push( action.payload )
        }
    }
});

export const { addSearch } = historySlice.actions;

export const selectHistory = state => state.history.value;

export default historySlice.reducer;