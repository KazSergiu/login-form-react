import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../../usersState/user";


export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
