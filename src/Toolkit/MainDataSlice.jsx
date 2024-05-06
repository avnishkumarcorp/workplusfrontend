import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const mainDataFun = createAsyncThunk(
  "getAllMainData",
  async ({ email, date }) => {
    const mainData = await getQuery(
      `${process.env.REACT_APP_BASE_URL}dailyActivity?email=${email}&date=${date}`
    )
    return mainData?.data
  }
)

export const mainDataAllFun = createAsyncThunk(
  "getAllMainDataAllFun",
  async ({ email, date }) => {
    const mainData = await getQuery(
      `${process.env.REACT_APP_BASE_URL}dailyActivity?email=${email}&date=${date}`
    )
    return mainData?.data
  }
)

export const mainDataSlice = createSlice({
  name: "maindata",
  initialState: {
    mainApiData: {},
    mainLoading: false,
    mainError: false,
    mainAllApiData: {},
    mainAllLoading: false,
    mainAllError: false,
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

    builder.addCase(mainDataAllFun.pending, (state, action) => {
      state.mainAllLoading = true
      state.mainAllError = false
    })
    builder.addCase(mainDataAllFun.fulfilled, (state, action) => {
      state.mainAllApiData = action.payload
      state.mainAllLoading = false
      state.mainAllError = false
    })
    builder.addCase(mainDataAllFun.rejected, (state, action) => {
      state.mainAllLoading = false
      state.mainAllError = true
    })
  },
})

export default mainDataSlice.reducer
