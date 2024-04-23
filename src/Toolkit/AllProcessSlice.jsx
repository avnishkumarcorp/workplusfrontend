import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const allProcessFun = createAsyncThunk(
  "al-process-data-urls",
  async (email) => {
    const allProcessRes = await getQuery(
      `${process.env.REACT_APP_BASE_URL}getUserProcesses?userEmail=${email}`
    )
    return allProcessRes?.data
  }
)

export const AllProcessSlice = createSlice({
  name: "allprocess",
  initialState: {
    allprocess: [],
    processLoading: false,
    processError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(allProcessFun.pending, (state, action) => {
      state.processLoading = true
      state.processError = false
    })
    builder.addCase(allProcessFun.fulfilled, (state, action) => {
      state.allprocess = action.payload
      state.processLoading = false
      state.processError = false
    })
    builder.addCase(allProcessFun.rejected, (state, action) => {
      state.processLoading = false
      state.processError = true
    })
  },
})

export default AllProcessSlice.reducer