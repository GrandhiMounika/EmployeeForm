import { createSlice } from "@reduxjs/toolkit";
 
const initialState = {
    title:'',
    firstName:'',
    lastName:'',
    dateOfBirth:'',
    houseNumber:'',
    postCode:'',
    employmentStatus:'',
    annualIncome:''
};
 
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      state.title = action.payload.title;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.dateOfBirth = action.payload.dateOfBirth;
      state.houseNumber = action.payload.houseNumber;
      state.postCode = action.payload.postCode;
      state.employmentStatus = action.payload.employmentStatus;
      state.annualIncome = action.payload.annualIncome;
    },
  },
});
 
export const { setUserDetails } = userSlice.actions;

export default userSlice.reducer;