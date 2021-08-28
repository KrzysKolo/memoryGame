import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.email = action.payload;
    },
  }
});
export const { setUserLogin } = userSlice.actions;
export default userSlice.reducer;