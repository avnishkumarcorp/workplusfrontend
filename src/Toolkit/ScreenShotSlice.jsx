import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const allScreenShotFun = createAsyncThunk(
  "all-user-screen-shot",
  async ({ email, date }) => {
    const allscreenRes = await getQuery(
      `${process.env.REACT_APP_BASE_URL}getUserScreenshots?userEmail=${email}&date=${date}`
    )
    return allscreenRes?.data
  }
)

export const ScreenShotSlice = createSlice({
  name: "screenshot",
  initialState: {
    allScreenshot: [],
    screenshotLoading: false,
    screenshotError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(allScreenShotFun.pending, (state, action) => {
      state.screenshotLoading = true
      state.screenshotError = false
    })
    builder.addCase(allScreenShotFun.fulfilled, (state, action) => {
      state.allScreenshot = action.payload
      state.screenshotLoading = false
      state.screenshotError = false
    })
    builder.addCase(allScreenShotFun.rejected, (state, action) => {
      state.screenshotLoading = false
      state.screenshotError = true
    })
  },
})

export default ScreenShotSlice.reducer
