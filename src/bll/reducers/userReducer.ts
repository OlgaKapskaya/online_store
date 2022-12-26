import {AuthType, UserType} from "../types";
import {Dispatch} from "redux";
import {usersAPI} from "../../dal/usersAPI";

export type UsersActionsType = GetUserAT
type GetUserAT = ReturnType<typeof getUserAC>

const initState: AuthType = {
    email: '',
    password: '',
    id: '',
    isAuth: false,
    orders: []
}

export const userReducer = (users = initState, action: UsersActionsType): AuthType => {
    switch (action.type) {
        case "SET_USER_DATA":
            return {
                ...action.user,
                isAuth: true
            }
        default:
            return users
    }
}

export const getUserAC = (user: UserType) => {
    return {type: "SET_USER_DATA", user} as const
}


export const getUserTC = (email: string, password: string) => (dispatch: Dispatch<UsersActionsType>) => {
    usersAPI.getUser(email, password)
        .then((res) => {
            if (res.items.length === 1)
            dispatch(getUserAC(res.items[0]))
        })
}

export const registerUserTC = (email: string, password: string) => (dispatch: Dispatch<UsersActionsType>) => {
    usersAPI.registrationUser(email, password)
        .then((res) => {
            dispatch(getUserAC(res.items))
        })
}