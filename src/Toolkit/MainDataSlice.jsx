import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getQuery } from "../API/GetQuery"

export const mainDataFun = () => createAsyncThunk('getAllMainData', async () =>{
    const mainData = await getQuery(`http://localhost:8888/saveDailyActivity`); 
})

export const  mainDataSlice = createSlice({
    name: "maindata",
    initialState: {},
    extraReducers: (builder) => {
        builder.addCase(mainDataFun.pending, (state, action) => {

        })
    } 
})