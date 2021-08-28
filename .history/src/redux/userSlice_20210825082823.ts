import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: "",
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload;
    },
  }
});
export const { setUserLogin } = userSlice.actions;
export default userSlice.reducer;