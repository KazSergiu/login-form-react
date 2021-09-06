import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
    },
  },
  reducers: {
      register: (state, action)=>{
          state.value = action.payload
      }
  }
});

export default userSlice.reducer;
 