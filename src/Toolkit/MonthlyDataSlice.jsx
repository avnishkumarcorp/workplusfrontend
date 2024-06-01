import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const allUserDataFun = createAsyncThunk(
  "all-user-data-urls",
  async ({ year, month }) => {
    const allDataRes = await getQuery(
      `${process.env.REACT_APP_BASE_URL}allUserMonthlyReport?year=${year}&month=${month}`
    )
    return allDataRes?.data
  }
)

// export const allUserReportsFun = createAsyncThunk(
//   "al-reports-data-urls-user-reports",
//   async ({ email, date }) => {
//     const allReportsRes = await getQuery(
//       `${process.env.REACT_APP_BASE_URL}report?email=${email}&date=${date}`
//     )
//     return allReportsRes?.data
//   }
// )

export const MonthlyDataSlice = createSlice({
  name: "monreport",
  initialState: {
    monReport: [],
    monReportLoading: false,
    monReportError: false,
    // allUserReports: [],
    // UserReportsLoading: false,
    // UserReportsError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(allUserDataFun.pending, (state, action) => {
      state.monReportLoading = true
      state.monReportError = false
    })
    builder.addCase(allUserDataFun.fulfilled, (state, action) => {
      state.monReport = action.payload
      state.monReportLoading = false
      state.monReportError = false
    })
    builder.addCase(allUserDataFun.rejected, (state, action) => {
      state.monReportLoading = false
      state.monReportError = true
    })

    // builder.addCase(allUserReportsFun.pending, (state, action) => {
    //   state.UserReportsLoading = true
    //   state.UserReportsError = false
    // })
    // builder.addCase(allUserReportsFun.fulfilled, (state, action) => {
    //   state.allUserReports = action.payload
    //   state.UserReportsLoading = false
    //   state.UserReportsError = false
    // })
    // builder.addCase(allUserReportsFun.rejected, (state, action) => {
    //   state.UserReportsLoading = false
    //   state.UserReportsError = true
    // })
  },
})

export default MonthlyDataSlice.reducer
