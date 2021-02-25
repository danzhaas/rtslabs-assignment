import { configureStore } from '@reduxjs/toolkit';
import historyReducer from '../features/search/HistorySlice';

export default configureStore({
  reducer: {
    history: historyReducer
  },
});
