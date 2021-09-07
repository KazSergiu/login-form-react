import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = {
  id: "",
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  logedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: initialStateValue,
  },
  reducers: {
    register: (state, action) => {
      state.value = action.payload;
    },
    login: (state) => {
      state.value.logedIn = true;
    },
    logout: (state) => {
      state.value.logedIn = false;
    },
  },
});

export const { register, logout, login } = userSlice.actions;

export default userSlice.reducer;
