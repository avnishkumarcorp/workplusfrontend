import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const allRoleFun = createAsyncThunk("all-users-roles", async () => {
  const roleData = await getQuery(
    `${process.env.REACT_APP_BASE_URL}roles/getRoles`
  )
  return roleData?.data
})

export const RoleSlice = createSlice({
  name: "role",
  initialState: {
    allRoles: [],
    roleLoading: false,
    roleError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(allRoleFun.pending, (state, action) => {
      state.roleLoading = true
      state.roleError = false
    })
    builder.addCase(allRoleFun.fulfilled, (state, action) => {
      state.allRoles = action.payload
      state.roleLoading = false
      state.roleError = false
    })
    builder.addCase(allRoleFun.rejected, (state, action) => {
      state.roleLoading = false
      state.roleError = true
    })
  },
})

export default RoleSlice.reducer
