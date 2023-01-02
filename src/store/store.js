import { configureStore } from '@reduxjs/toolkit';
import isLightTheme from './reducer';

const store = configureStore({
  reducer: {
    isLightTheme    
  },
});

export default store;
