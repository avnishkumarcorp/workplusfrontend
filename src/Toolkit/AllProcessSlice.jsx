import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const allProcessFun = createAsyncThunk(
  "al-process-data-urls",
  async ({ email, date }) => {
    const allProcessRes = await getQuery(
      `${process.env.REACT_APP_BASE_URL}getUserProcesses?userEmail=${email}&date=${date}`
    )
    return allProcessRes?.data
  }
)

export const allUserProcessFun = createAsyncThunk(
  "al-process-data-urls-user-process",
  async ({ email, date }) => {
    const allProcessRes = await getQuery(
      `${process.env.REACT_APP_BASE_URL}getUserProcesses?userEmail=${email}&date=${date}`
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
    allUserprocess: [],
    UserprocessLoading: false,
    UserprocessError: false,
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

    builder.addCase(allUserProcessFun.pending, (state, action) => {
      state.UserprocessLoading = true
      state.UserprocessError = false
    })
    builder.addCase(allUserProcessFun.fulfilled, (state, action) => {
      state.allUserprocess = action.payload
      state.UserprocessLoading = false
      state.UserprocessError = false
    })
    builder.addCase(allUserProcessFun.rejected, (state, action) => {
      state.UserprocessLoading = false
      state.UserprocessError = true
    })
  },
})

export default AllProcessSlice.reducer
