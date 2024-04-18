import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postQuery } from "../API/PostQuery"

export const authDataFun = createAsyncThunk("auth-user", async (data) => {
  const userApiRes = await postQuery(
    `${process.env.REACT_APP_BASE_URL}login`,
    data
  )
  return userApiRes
})

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    currentUser: {},
    loading: false,
    error: false,
  },
  extraReducers: (builder) => {
    builder.addCase(authDataFun.pending, (state, action) => {
      console.log("pending...", action)
      state.loading = true
      state.error = false
    })
    builder.addCase(authDataFun.fulfilled, (state, action) => {
      console.log("fulfilled...", action)
      state.currentUser = action.payload
      state.loading = false
      state.error = false
    })
    builder.addCase(authDataFun.rejected, (state, action) => {
      console.log("rejected...", action)
      state.loading = false
      state.error = true
    })
  },
})

export default AuthSlice.reducer
