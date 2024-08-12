import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const loadUser = createAsyncThunk("user/loadUser", async (userId) => {
  return api.getProfileInfo(userId);
});
