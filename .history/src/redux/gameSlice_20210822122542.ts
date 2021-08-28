import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  numberOfCard: 8,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state, action) => {
      state.isOpen = action.payload;
      state.numberOfCard = action.payload;
    }
  }
});

export const { startGame } = gameSlice.actions;


export default gameSlice.reducer;