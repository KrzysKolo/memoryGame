import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state, action) => {
      state.isOpen = action.payload
    }
  }
});

export const { startGame } = gameSlice.actions;
export const getGame = (state) => state.game.isOpen;

export default gameSlice.reducer;