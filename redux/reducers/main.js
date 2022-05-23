import {createSlice} from "@reduxjs/toolkit";
import {LOCALES} from "../../intl/locales";

const initialState = {
    locale: LOCALES.ENGLISH,
};

const main = createSlice({
    name: "main",
    initialState,
    reducers: {
        setLocale(state, action) {
            state.locale = action.payload;
        },
    }
});

export const {setLocale} =
    main.actions;

export default main.reducer;
