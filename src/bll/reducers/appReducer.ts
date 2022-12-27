
const initialState = {
    message: null as null | string,
    error: null as null | string,
    isLoading: false
}

type InitialStateType = typeof initialState

export const appReducer = (state: InitialStateType = initialState, action: AppActionsType): InitialStateType => {
    switch (action.type) {
        case "APP/SET-MESSAGE":
            return {...state, message: action.message}
        case "APP/SET-ERROR":
            return {...state, error: action.error}
        case "APP/SET-STATUS":
            return {...state, isLoading: action.isLoading}
        default:
            return state
    }
}

export type AppActionsType = SetStatusAT | SetErrorAT | SetMessageAT
export type SetStatusAT = ReturnType<typeof setStatusAC>
export type SetErrorAT = ReturnType<typeof setErrorAC>
export type SetMessageAT = ReturnType<typeof setMessageAC>
export const setStatusAC = (isLoading: boolean) => {
    return {type: "APP/SET-STATUS", isLoading} as const
}
export const setMessageAC = (message: null | string) => {
    return {type: "APP/SET-MESSAGE", message} as const
}
export const setErrorAC = (error: null | string) => {
    return {type: "APP/SET-ERROR", error} as const
}