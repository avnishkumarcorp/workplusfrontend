import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"
import { postQuery } from "../API/PostQuery"
import { deleteQuery } from "../API/DeleteQuery"

export const allUsersFun = createAsyncThunk("all-users-data", async () => {
  const getUsersData = await getQuery(
    `${process.env.REACT_APP_BASE_URL}allUsersList`
  )
  return getUsersData?.data
})

export const createUserFun = createAsyncThunk(
  "create-all-users",
  async (data) => {
    const createUser = await postQuery(
      `${process.env.REACT_APP_BASE_URL}createUser`,
      data
    )
    return createUser?.data
  }
)

export const deleteUserFun = createAsyncThunk(
  "delete-all-users",
  async ({ id }) => {
    const deleteUser = await deleteQuery(
      `${process.env.REACT_APP_BASE_URL}deleteUser?userId=${id}`
    )
    return deleteUser?.data
  }
)

export const AllUsersSlice = createSlice({
  name: "alluser",
  initialState: {
    allUsers: [],
    userLoading: false,
    userError: false,
    createNewUser: false,
    newuserLoading: false,
    newUserError: false,
    deleteUser: false,
    deluserLoading: false,
    delUserError: false,
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

    builder.addCase(createUserFun.pending, (state, action) => {
      state.newuserLoading = true
      state.newUserError = false
    })
    builder.addCase(createUserFun.fulfilled, (state, action) => {
      state.createNewUser = true
      state.newuserLoading = false
      state.newUserError = false
    })
    builder.addCase(createUserFun.rejected, (state, action) => {
      state.newuserLoading = false
      state.newUserError = true
    })

    builder.addCase(deleteUserFun.pending, (state, action) => {
      state.deluserLoading = true
      state.delUserError = false
    })
    builder.addCase(deleteUserFun.fulfilled, (state, action) => {
      state.deleteUser = action.payload
      state.deluserLoading = false
      state.delUserError = false
    })
    builder.addCase(deleteUserFun.rejected, (state, action) => {
      state.deluserLoading = false
      state.delUserError = true
    })
  },
})

export default AllUsersSlice.reducer

