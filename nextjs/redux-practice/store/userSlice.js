import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    address: '',
  },

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});
