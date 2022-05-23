import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  projects:[]
};

const projects = createSlice({
    name: "projects",
    initialState,
    reducers: {
        setProjects(state, action) {
            state.projects = action.payload;
        },
    }
});

export const {setProjects} =
    projects.actions;

export default projects.reducer;
