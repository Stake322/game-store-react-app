import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer'
import gamesSlice from "./games/reducer"

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        games: gamesSlice,
    },
})