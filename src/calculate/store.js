import { configureStore } from '@reduxjs/toolkit'
import counter from './redux';

export const store = configureStore({
    reducer: {
        counter: counter
    },
})