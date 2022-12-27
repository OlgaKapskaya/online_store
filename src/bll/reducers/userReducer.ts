import {AuthType, BasketProductType, OrderPayloadType, OrderType, UserType} from "../types";
import {Dispatch} from "redux";
import {usersAPI} from "../../dal/usersAPI";
import {AppFullActionsType, AppRootStateType} from "../store";
import {setErrorAC, setMessageAC, setStatusAC} from "./appReducer";
import {clearBasketTC} from "./basketReducer";
import {ThunkDispatch} from "redux-thunk";

export type UsersActionsType = GetUserAT | SetUserLoadingAT | AddOrderAT | GetOrdersAT
type GetUserAT = ReturnType<typeof getUserAC>
type SetUserLoadingAT = ReturnType<typeof setUserLoadingAC>
type AddOrderAT = ReturnType<typeof addOrderAC>
type GetOrdersAT = ReturnType<typeof getOrdersAC>

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
        case "USER/ADD_ORDER":
            return {
                ...users,
                orders: [action.order, ...users.orders]
            }
        case "USER/GET_ORDERS":
            return {
                ...users,
                orders: action.orders
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
export const addOrderAC = (order: OrderType) => {
    return {type: "USER/ADD_ORDER", order} as const
}
export const getOrdersAC = (orders: OrderType[]) => {
    return {type: "USER/GET_ORDERS", orders} as const
}


export const getUserTC = (email: string, password: string) => (dispatch: Dispatch<AppFullActionsType>) => {
    dispatch(setUserLoadingAC(true))
    usersAPI.getUser(email, password)
        .then((res) => {
            res.items.length === 1 && res.items[0].password === password
                ? dispatch(getUserAC(res.items[0]))
                : dispatch(setErrorAC("Неверное имя пользователя или пароль"))
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
                dispatch(setErrorAC("Пользователь с таким логином уже существует"))
            }
            dispatch(setUserLoadingAC(false))
        })
}

export const addOrderTC = (order: BasketProductType[], totalPrice: number) => (dispatch: ThunkDispatch<AppRootStateType, any, AppFullActionsType>, getState: () => AppRootStateType) => {
    const userID = getState().users.id
    const payload: OrderPayloadType = {userID, order: [...order], totalPrice}
    if (userID) {
        dispatch(setStatusAC(true))
        usersAPI.addOrder(payload)
            .then((res) => {
                dispatch(addOrderAC(res.items))
                dispatch(clearBasketTC())
                dispatch(setStatusAC(false))
                dispatch(setMessageAC(`Ваш заказ №${res.items.id} успешно оформлен и скоро будет передан курьерской доставке`))
            })
    } else {
        dispatch(setErrorAC("Для оформления заказа необходимо авторизоваться в системе"))
    }

}

export const getOrdersTC = () => (dispatch: ThunkDispatch<AppRootStateType, any, AppFullActionsType>, getState: () => AppRootStateType) => {
    const userID = getState().users.id
    if (userID) {
        dispatch(setStatusAC(true))
        usersAPI.getOrders(userID)
            .then((res) => {
                dispatch(getOrdersAC(res.items))
                dispatch(setStatusAC(false))
            })
    } else {
        dispatch(setErrorAC("Что-то пошло не так :( "))
    }
}