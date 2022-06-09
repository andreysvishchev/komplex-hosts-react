export type ConfidantType = {
    id: number
    name: string
    passport: string
    tel: string
}
export type InitStateType = ConfidantType []

export const initState: InitStateType = [
    {id: 1, name: 'Иванов Иван Иванович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
    {id: 2, name: 'Иванов Иван Иванович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
    {id: 3, name: 'Иванов Иван Иванович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
    {id: 4, name: 'Иванов Иван Иванович', passport: '2230 495839', tel: '+7 (953) 335-34-43'},
]

export const confidantReducer = (state: InitStateType = initState, action: ActionsType) => {
    switch (action.type) {
        case "DELETE-ALL-CONFIDANT":
            return state = []
        default :
            return state
    }
}
type ActionsType = DeleteAllConfidantActionType

type DeleteAllConfidantActionType = ReturnType<typeof deleteAllConfidant>

export const deleteAllConfidant = () => {
    return {
        type: 'DELETE-ALL-CONFIDANT',
    } as const
}