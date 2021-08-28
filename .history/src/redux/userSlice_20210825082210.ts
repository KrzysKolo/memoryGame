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
export const { setUserLogin, setSignOut } = userSlice.actions;
export const selectUserEmail = (state => state.user.email);
export default userSlice.reducer;