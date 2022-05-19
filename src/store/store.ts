import {combineReducers, createStore} from "redux";
import {notesReducer} from "../reducers/notesReducer";


const rootState = combineReducers({
    notes: notesReducer
})

export type RootStateType = ReturnType<typeof rootState>

export const store = createStore(rootState)