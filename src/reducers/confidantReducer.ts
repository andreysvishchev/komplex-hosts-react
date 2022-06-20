export type ConfidantType = {
    id: number
    name: string
    passport: string
    tel: string
}
export type InitStateType = ConfidantType []

export const initState: InitStateType = [
    {id: 1, name: 'Иванов Иван Иванович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
    {id: 2, name: 'Борисов Дмитрий Сергеевич', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
    {id: 3, name: 'Антонов Иван Олегович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
    {id: 4, name: 'Вдовин Денис Юрьевич', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
]

export const confidantReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case "DELETE-ALL-CONFIDANT":
            return state = []
        case "DELETE-CONFIDANT":
            return state.filter(el => el.id !== action.id)
        case "EDIT-CONFIDANT":
            return state.map(el=> el.id === action.id ? {...el, name: action.name, passport: action.passport, tel: action.tel}: el)
        default :
            return state
    }
}


export const deleteAllConfidant = () => {
    return {type: 'DELETE-ALL-CONFIDANT',} as const
}
export const deleteConfidantAC = (id: number) => {
    return {type: 'DELETE-CONFIDANT', id} as const
}
export const editConfidantAC = ( id: number, name: string, passport: string, tel: string) => {
    return {type: 'EDIT-CONFIDANT', id, name, passport, tel} as const
}

export type ActionsType =
    | ReturnType<typeof deleteAllConfidant>
    | ReturnType<typeof deleteConfidantAC>
    | ReturnType<typeof editConfidantAC>

