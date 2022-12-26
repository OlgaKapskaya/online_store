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
                ...action.users[0],
                isAuth: true
            }
        default:
            return users
    }
}

export const getUserAC = (users: UserType[]) => {
    return {type: "SET_USER_DATA", users} as const
}


export const getUserTC = (email: string, password: string) => (dispatch: Dispatch<UsersActionsType>) => {
    usersAPI.getUser(email, password)
        .then((res) => {
            if (res.items.length === 1)
            dispatch(getUserAC(res.items))
        })
}