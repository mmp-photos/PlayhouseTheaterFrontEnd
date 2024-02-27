import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../features/counter/counterSlice.js";
import userReducer from "../../features/user/userSlice.js";
import classesReducer from "../../features/classes/classesSlice.js";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        classes: classesReducer,
    }
})