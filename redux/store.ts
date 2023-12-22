import { configureStore } from '@reduxjs/toolkit';
import detailsReducer from './features/details-slice';
import stepsReducer from './features/steps-slice';

export const store = configureStore({
    reducer: {detailsReducer, stepsReducer},
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>