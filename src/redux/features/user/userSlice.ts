import { User } from "@/interfaces/common";
import { authKey } from "@/utils/constants";
import { getItemFromLocalstorage } from "@/utils/functions";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: getItemFromLocalstorage(authKey),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    removeUser: (state: UserState) => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
