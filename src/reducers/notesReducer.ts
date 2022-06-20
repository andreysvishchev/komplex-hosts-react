export type NoteType = {
    id: number
    data: string
    caption: string
    important: boolean
}

export type InitStateType = NoteType []

let initState: InitStateType = [
    {id: 1, data: '27.10.2021', caption: 'Нужно не забыть заплатить за сервер!!!', important: true},
    {id: 2, data: '17.09.2021', caption: 'Пополнить счёт', important: false},
    {id: 3, data: '27.10.2021', caption: 'НужYно не забыть заплатить за сервер!!!', important: false},
    {id: 4, data: '27.10.2021', caption: 'Нужно не забыть заплатить за сервер!!!', important: false}
]

export const notesReducer = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case "TOGGLE-MENU":
            return state.map(el => el.id === action.noteId ? {...el, menuIsOpen: !action.open} : {
                ...el,
                menuIsOpen: false
            })
        case "DELETE-NOTE":
            return state.filter(el => el.id !== action.noteId)
        case "DELETE-ALL-NOTES":
            return state = []
        default:
            return state
    }
}

export type ActionType = ToggleMenuActionType | DeleteNoteActionType | DeleteAllNotesActionType

type ToggleMenuActionType = ReturnType<typeof toggleMenuAC>
type DeleteNoteActionType = ReturnType<typeof deleteNoteAC>
type DeleteAllNotesActionType = ReturnType<typeof deleteAllNotes>

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

export const deleteAllNotes = () => {
    return {
        type: 'DELETE-ALL-NOTES',
    } as const
}
