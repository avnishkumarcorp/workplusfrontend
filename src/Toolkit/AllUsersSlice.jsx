import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const allUsersFun = createAsyncThunk('all-users-data', async () => {
    const getUsersData = await getQuery(`${process.env.REACT_APP_BASE_URL}allUsersList`) 
    return getUsersData?.data
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
            console.log("pending...", action)
            state.userLoading = true
            state.userError = false
          })
          builder.addCase(allUsersFun.fulfilled, (state, action) => {
            console.log("fulfilled...", action)
            state.allUsers = action.payload
            state.userLoading = false
            state.userError = false
          })
          builder.addCase(allUsersFun.rejected, (state, action) => {
            console.log("rejected...", action)
            state.userLoading = false
            state.userError = true
          })
    }
})

export default AllUsersSlice.reducer




















// http://localhost:8888/allUsersList

