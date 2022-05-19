export type NoteType = {
    id: number
    data: string
    caption: string
    important: boolean
    menuIsOpen: boolean
}

export type InitStateType = NoteType []

let initState: InitStateType = [
    {id: 1, data: '27.10.2021', caption: 'Нужно не забыть заплатить за сервер!!!', important: true, menuIsOpen: false},
    {id: 2, data: '17.09.2021', caption: 'Пополнить счёт', important: false, menuIsOpen: false},
    {id: 3, data: '27.10.2021', caption: 'Нужно не забыть заплатить за сервер!!!', important: false, menuIsOpen: false},
    {id: 4, data: '27.10.2021', caption: 'Нужно не забыть заплатить за сервер!!!', important: false, menuIsOpen: false}
]

export const notesReducer = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE-MENU":
            return state.map(el=> el.id === action.noteId ? {...el, menuIsOpen: !action.open } : el)
        case "DELETE-NOTE":
            return state.filter(el=> el.id !== action.noteId)
        default:
            return state
    }
}

export type ActionType = ToggleMenuActionType | DeleteNoteActionType

type ToggleMenuActionType = ReturnType<typeof toggleMenuAC>
type DeleteNoteActionType = ReturnType<typeof deleteNoteAC>

export const toggleMenuAC = (noteId: number, open: boolean) => {
    return {
        type: 'TOGGLE-MENU',
        noteId,
        open
    } as const
}

export const deleteNoteAC = (noteId: number) => {
    return {
        type: 'DELETE-NOTE',
        noteId
    } as const
}