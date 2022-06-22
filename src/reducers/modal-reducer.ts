const initialState = {
    open: false,
    message: ''
}


export const modalReducer = (state: ModalType = initialState, action: ActionType): ModalType => {
    switch (action.type) {
        case "OPEN-MODAL":
            return {...state, open: action.isOpen, message: action.message}
        case "CLOSE-MODAL":
            return {...state, open: action.isOpen}
        default:
            return state
    }
}


export const openModalAC = (isOpen: boolean, message: string) => {
    return {type: 'OPEN-MODAL', isOpen, message} as const
}
export const closeModalAC = (isOpen: boolean) => {
    return {type: 'CLOSE-MODAL', isOpen} as const
}

export type ActionType =
    | ReturnType<typeof openModalAC>
    | ReturnType<typeof closeModalAC>
export type ModalType = typeof initialState