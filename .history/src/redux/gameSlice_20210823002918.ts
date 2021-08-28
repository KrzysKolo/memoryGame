import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  matchedPairs: 0,
  turn: 1,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    StartStopGame: (state, action) => {
      state.isOpen = action.payload;
    },
    MatchedPairs: (state, action) => {
      state.matchedPairs = action.payload;
    },
    UpTurn: (state, action) => {
      state.turn = action.payload;
    },

  }
});

export const { StartStopGame, MatchedPairs, UpTurn } = gameSlice.actions;


export default gameSlice.reducer;