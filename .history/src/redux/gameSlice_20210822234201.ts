import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    StartStopGame: (state, action) => {
      state.isOpen = action.payload;
    },

  }
});

export const { StartStopGame } = gameSlice.actions;


export default gameSlice.reducer;