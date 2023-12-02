import { createSlice } from "@reduxjs/toolkit";

//state updating possion

const generalSlice = createSlice({
  name: "user",
  initialState: {
    userDetails: { name: "manu" },
    userRole: 10,
  },
  reducers: {
    setUserDetails: (state, action) => {
      state.userDetails = { name: "manu" };
    },
    setUserRole: (state, action) => {
      state.userRole = state.userRole+1 ;
    },
  },
});

export const { setUserDetails, setUserRole } = generalSlice.actions;
export default generalSlice.reducer;
