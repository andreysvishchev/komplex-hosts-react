let initialState = {
    isInitialized: false
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType ): initialStateType => {
    switch (action.type) {
        case "APP/SET-INITIALIZED":
            return {...state, isInitialized: action.isInitialized}
        default:
            return state
    }
}

export const setAppInitializedAC = (isInitialized: boolean) => {
    return {
        type: 'APP/SET-INITIALIZED',
        isInitialized
    } as const
}

export type initialStateType = typeof initialState
export type ActionsType =
    | ReturnType<typeof setAppInitializedAC>