import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from './reducers/data-reducer';

const store = configureStore({
  reducer: {data: dataReducer},
  devTools: true,
});

export type TRootReducer = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;

export default store;