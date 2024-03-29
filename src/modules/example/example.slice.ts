import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import type { RootState } from '@/config/redux/redux.store';

// Define a type for the slice state
interface ExampleState {
  value: number;
}

// Define the initial state using that type
const initialState: ExampleState = {
  value: 0,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = exampleSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.example.value;

export default exampleSlice.reducer;
