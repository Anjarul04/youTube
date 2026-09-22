import { createSlice } from "@reduxjs/toolkit";

const chacheSlice =createSlice({
    name: "chache",
    initialState: {
        searchChache: {},
    },
    reducers:{
        setSearchChache: (state, action) =>{
            state.searchChache = { ...state.searchChache, ...action.payload };
        }
    }
})
export const { setSearchChache } = chacheSlice.actions;
export default chacheSlice.reducer;