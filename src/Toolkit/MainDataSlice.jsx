import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const mainDataFun = createAsyncThunk("getAllMainData", async (data) => {
  const mainData = await getQuery(
    `${process.env.REACT_APP_BASE_URL}dailyActivity?email=${data}`
  )
  return mainData?.data
})

export const mainDataSlice = createSlice({
  name: "maindata",
  initialState: {
    mainApiData: {},
    mainLoading: false,
    mainError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(mainDataFun.pending, (state, action) => {
      state.mainLoading = true
      state.mainError = false
    })
    builder.addCase(mainDataFun.fulfilled, (state, action) => {
      state.mainApiData = action.payload
      state.mainLoading = false
      state.mainError = false
    })
    builder.addCase(mainDataFun.rejected, (state, action) => {
      state.mainLoading = false
      state.mainError = true
    })
  },
})

export default mainDataSlice.reducer
