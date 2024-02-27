import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: null,
  firstName: '',
  signedIn: false,
  // Add more user-related data as needed
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { userId, firstName } = action.payload;
      state.userId = userId;
      state.firstName = firstName;
      state.signedIn = true;
      // Set other user data here if needed
    },
    setSignedOut: (state, action) => {
      const signedIn = action.payload;
      state.signedIn = false;
      // Allow user to log out
    }
    // Add more reducers as needed
  },
});

export const { setUser, setSignedOut } = userSlice.actions;
export default userSlice.reducer;