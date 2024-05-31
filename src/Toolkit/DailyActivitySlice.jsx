import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postQuery } from "../API/PostQuery"

export const DailyActivityFun = createAsyncThunk(
  "send-daily-activity",
  async (data) => {
    const DailyData = await postQuery(
      `${process.env.REACT_APP_BASE_URL}saveDailyActivity`,
      data
    )
    return DailyData?.data
  }
)

export const DailyActivitySlice = createSlice({
  name: "activity",
  initialState: {
    startActivity: [],
    ActivityLoading: false,
    ActivityError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(DailyActivityFun.pending, (state, action) => {
      state.ActivityLoading = true
      state.ActivityError = false
    })
    builder.addCase(DailyActivityFun.fulfilled, (state, action) => {
      state.startActivity = action.payload
      state.ActivityLoading = false
      state.ActivityError = false
    })
    builder.addCase(DailyActivityFun.rejected, (state, action) => {
      state.ActivityLoading = false
      state.ActivityError = true
    })
  },
})

export default DailyActivitySlice.reducer
