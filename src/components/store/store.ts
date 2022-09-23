import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './reducers/data-reducer';

const store = configureStore({
  reducer: {data: dataReducer},
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;