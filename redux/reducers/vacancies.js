import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    vacancies:[]
};

const vacancies = createSlice({
    name: "vacancies",
    initialState,
    reducers: {
        setVacancies(state, action) {
            state.vacancies = action.payload;
        }
    }
});

export const {setVacancies} = vacancies.actions;

export default vacancies.reducer;
