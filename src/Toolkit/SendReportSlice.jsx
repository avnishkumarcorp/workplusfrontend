import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { putQuery } from "../API/PutQuery"

export const sendReportFun = createAsyncThunk(
  "send-report-data-urls",
  async (data) => {
    const sendReportRes = await putQuery(
      `${process.env.REACT_APP_BASE_URL}updateLogoutTime`,
      data
    )
    return sendReportRes?.data
  }
)





export const SendReportSlice = createSlice({
    name: "sendreport",
    initialState: {
      allSendReports: [],
      sendReportsLoading: false,
      sendReportsError: false,
    },
    extraReducers: (builder) => {
      builder.addCase(sendReportFun.pending, (state, action) => {
        state.sendReportsLoading = true
        state.sendReportsError = false
      })
      builder.addCase(sendReportFun.fulfilled, (state, action) => {
        state.allSendReports = action.payload
        state.sendReportsLoading = false
        state.sendReportsError = false
      })
      builder.addCase(sendReportFun.rejected, (state, action) => {
        state.sendReportsLoading = false
        state.sendReportsError = true
      })

    },
  })
  
  export default SendReportSlice.reducer
  