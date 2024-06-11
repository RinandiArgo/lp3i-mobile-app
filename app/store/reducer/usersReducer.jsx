import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:"user",
    initialState:{
        formFilter:{},
        data:[]
    },
    reducers:{
        setData:(state, action)=> {
            state.data = action.payload
        },
        clearData:(state) => {
            state.data = []
        },
    }
})

export const{
    setData,
    clearData,
} = userSlice.actions

export default userSlice.reducer