import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../utils/api";

export const loadProjects = createAsyncThunk("projectss/loadProjectss", async () => {
  return api.getProjectsInfo();
});
