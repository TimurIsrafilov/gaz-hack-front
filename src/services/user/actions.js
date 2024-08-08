import { createAsyncThunk } from "@reduxjs/toolkit";
import getProfileInfo from "../../utils/api";

export const loadUser = createAsyncThunk("user/loadUser", async () => {
  return getProfileInfo();
});