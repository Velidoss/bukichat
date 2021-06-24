import { createSlice } from "@reduxjs/toolkit";
import avatar from '../../assets/avatar.png';

const initialState = {
  userName: "User",
  avatar: avatar,
}

const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {}
});

export default userSlice.reducer;