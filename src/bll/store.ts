import {combineReducers, legacy_createStore, applyMiddleware} from "redux"
import {productDataReducer, ProductDataReducerAT} from "./reducers/productDataReducer"
import thunk from "redux-thunk"
import {basketReducer, BasketReducerAT} from "./reducers/basketReducer";
import {userReducer, UsersActionsType} from "./reducers/userReducer";
import {AppActionsType, appReducer} from "./reducers/appReducer";

const rootReducer = combineReducers({
    productData: productDataReducer,
    basketData: basketReducer,
    users: userReducer,
    app: appReducer
})

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppFullActionsType = ProductDataReducerAT | BasketReducerAT | UsersActionsType | AppActionsType

// @ts-ignore
window.store = store