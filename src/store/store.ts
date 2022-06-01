import {combineReducers, createStore} from "redux";
import {notesReducer} from "../reducers/notesReducer";
import {confidantReducer} from "../reducers/confidantReducer";
import {noticeReducer} from "../reducers/noticeReducer";


const rootState = combineReducers({
    notes: notesReducer,
    confidant: confidantReducer,
    notice: noticeReducer
})

export type RootStateType = ReturnType<typeof rootState>

export const store = createStore(rootState)