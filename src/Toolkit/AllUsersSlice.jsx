import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"
import { postQuery } from "../API/PostQuery"

export const allUsersFun = createAsyncThunk('all-users-data', async () => {
    const getUsersData = await getQuery(`${process.env.REACT_APP_BASE_URL}allUsersList`) 
    return getUsersData?.data
})

export const createUserFun = createAsyncThunk('create-all-users', async () => {
  const createUser = await postQuery(`${process.env.REACT_APP_BASE_URL}`) 
})




export const AllUsersSlice = createSlice({
    name: "alluser",
    initialState: {
        allUsers: [],
        userLoading: false,
        userError: false,
    },
    extraReducers: (builder) => {
        builder.addCase(allUsersFun.pending, (state, action) => {
            state.userLoading = true
            state.userError = false
          })
          builder.addCase(allUsersFun.fulfilled, (state, action) => {
            state.allUsers = action.payload
            state.userLoading = false
            state.userError = false
          })
          builder.addCase(allUsersFun.rejected, (state, action) => {
            state.userLoading = false
            state.userError = true
          })
    }
})

export default AllUsersSlice.reducer




















// http://localhost:8888/allUsersList

