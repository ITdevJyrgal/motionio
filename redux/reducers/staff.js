import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    staff:[]
};

const staff = createSlice({
    name: "staff",
    initialState,
    reducers: {
        setStaff(state, action) {
            state.staff = action.payload;
        },
    }
});

export const {setStaff} =
    staff.actions;

export default staff.reducer;
