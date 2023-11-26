import { authKey } from "@/utils/constants";
import { getItemFromLocalstorage } from "@/utils/functions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: getItemFromLocalstorage(authKey),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: any, action: any) => {
      state.user = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;
