import {AuthType, UserType} from "../types";
import {Dispatch} from "redux";
import {usersAPI} from "../../dal/usersAPI";
import {AppFullActionsType} from "../store";
import {setErrorAC} from "./appReducer";

export type UsersActionsType = GetUserAT | SetUserLoadingAT
type GetUserAT = ReturnType<typeof getUserAC>
type SetUserLoadingAT = ReturnType<typeof setUserLoadingAC>

const initState: AuthType = {
    email: '',
    password: '',
    id: '',
    isAuth: false,
    orders: [],
    isLoading: false
}

export const userReducer = (users = initState, action: UsersActionsType): AuthType => {
    switch (action.type) {
        case "USER/SET_USER_DATA":
            return {
                ...users,
                ...action.user,
                isAuth: true
            }
        case "USER/SET_LOADING":
            return {
                ...users,
                isLoading: action.isLoading
            }
        default:
            return users
    }
}

export const getUserAC = (user: UserType) => {
    return {type: "USER/SET_USER_DATA", user} as const
}
export const setUserLoadingAC = (isLoading: boolean) => {
    return {type: "USER/SET_LOADING", isLoading} as const
}


export const getUserTC = (email: string, password: string) => (dispatch: Dispatch<AppFullActionsType>) => {
    dispatch(setUserLoadingAC(true))
    usersAPI.getUser(email, password)
        .then((res) => {
            res.items.length === 1 && res.items[0].password === password
                ? dispatch(getUserAC(res.items[0]))
                : dispatch(setErrorAC("Wrong login or password"))
        })
        .finally(() => dispatch(setUserLoadingAC(false)))
}

export const registerUserTC = (email: string, password: string) => (dispatch: Dispatch<AppFullActionsType>) => {
    dispatch(setUserLoadingAC(true))
    usersAPI.getUser(email, password)
        .then((res) => {
            if (res.items.length === 0) {
                usersAPI.registrationUser(email, password)
                    .then((res) => {
                        dispatch(getUserAC(res.items))
                    })
            } else {
                dispatch(setErrorAC("User with this login already exists"))
            }
        dispatch(setUserLoadingAC(false))
        })

}