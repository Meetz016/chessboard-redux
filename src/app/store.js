import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "../features/color/colorChangeSlice";

export const store = configureStore({
    reducer: colorReducer
});
