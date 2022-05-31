import {combineReducers, createStore} from "redux";
import {notesReducer} from "../reducers/notesReducer";
import {confidantReducer} from "../reducers/confidantReducer";


const rootState = combineReducers({
    notes: notesReducer,
    confidant: confidantReducer
})

export type RootStateType = ReturnType<typeof rootState>

export const store = createStore(rootState)