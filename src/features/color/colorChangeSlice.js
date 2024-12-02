import { createSlice} from "@reduxjs/toolkit";

const generateInitialState = () => {
  const state = {};
  for (let j = 7; j >= 0; j--) {
    for (let i = 0; i < 8; i++) {
      const key = `${i}-${j}`;
      const color = (i + j) % 2 === 0 ? 'black-tile' : 'white-tile';
      state[key] = color;
    }
  }
  return state;
};
const initialState = generateInitialState();

export const colorSlice = createSlice({
  name: 'chessboard',
  initialState,
  reducers: {
    changeColor: (state, action) => {
      const { key} = action.payload;
      let color=state[key]
      let newColor;
      if (color === 'white-tile') {
        newColor = 'yellow-tile';
      } else if (color === 'yellow-tile') {
        newColor = 'white-tile';
      } else if (color === 'black-tile') {
        newColor = 'red-tile';
      } else {
        newColor = 'black-tile';
      }
      state[key] = newColor; // Change color for the clicked tile
    },
  },
});

export const { changeColor } = colorSlice.actions;
export default colorSlice.reducer;
