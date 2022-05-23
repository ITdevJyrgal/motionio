import {configureStore} from "@reduxjs/toolkit";
import {createWrapper} from 'next-redux-wrapper'
import main from "./reducers/main";
import projects from "./reducers/projects";
import staff from "./reducers/staff";
import vacancies from "./reducers/vacancies";



const store = configureStore({
    reducer: {
        main,
        projects,
        staff,
        vacancies

    }, middleware:[]
})
const makeStore = () => store
export const wrapper = createWrapper(makeStore)


