import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const allReportsFun = createAsyncThunk(
  "al-reports-data-urls",
  async ({ email, date }) => {
    const allReportsRes = await getQuery(
      `${process.env.REACT_APP_BASE_URL}report?email=${email}&date=${date}`
    )
    return allReportsRes?.data
  }
)

export const allUserReportsFun = createAsyncThunk(
  "al-reports-data-urls-user-reports",
  async ({ email, date }) => {
    const allReportsRes = await getQuery(
      `${process.env.REACT_APP_BASE_URL}report?email=${email}&date=${date}`
    )
    return allReportsRes?.data
  }
)

export const AllReportsSlice = createSlice({
  name: "allreports",
  initialState: {
    allReports: [],
    reportsLoading: false,
    reportsError: false,
    allUserReports: [],
    UserReportsLoading: false,
    UserReportsError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(allReportsFun.pending, (state, action) => {
      state.reportsLoading = true
      state.reportsError = false
    })
    builder.addCase(allReportsFun.fulfilled, (state, action) => {
      state.allReports = action.payload
      state.reportsLoading = false
      state.reportsError = false
    })
    builder.addCase(allReportsFun.rejected, (state, action) => {
      state.reportsLoading = false
      state.reportsError = true
    })

    builder.addCase(allUserReportsFun.pending, (state, action) => {
      state.UserReportsLoading = true
      state.UserReportsError = false
    })
    builder.addCase(allUserReportsFun.fulfilled, (state, action) => {
      state.allUserReports = action.payload
      state.UserReportsLoading = false
      state.UserReportsError = false
    })
    builder.addCase(allUserReportsFun.rejected, (state, action) => {
      state.UserReportsLoading = false
      state.UserReportsError = true
    })
  },
})

export default AllReportsSlice.reducer
