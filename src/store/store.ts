import {combineReducers, createStore} from "redux";
import {notesReducer} from "../reducers/notesReducer";
import {confidantReducer} from "../reducers/confidantReducer";
import {noticeReducer} from "../reducers/noticeReducer";
import {authReducer} from "../reducers/authReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {modalReducer} from "../reducers/modal-reducer";
import {equipReducer} from "../reducers/equipReducer";
import {rentBlockReducer} from "../reducers/rentBlockReducer";


const rootState = combineReducers({
    notes: notesReducer,
    confidant: confidantReducer,
    notice: noticeReducer,
    auth: authReducer,
    modal: modalReducer,
    equips: equipReducer,
    rent: rentBlockReducer
})

export type RootStateType = ReturnType<typeof rootState>
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

export const store = createStore(rootState)