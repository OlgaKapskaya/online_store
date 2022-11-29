import {combineReducers, legacy_createStore, applyMiddleware} from 'redux'
import {productDataReducer, ProductDataReducerAT} from "./reducers/productDataReducer"
import thunk, {ThunkDispatch} from 'redux-thunk'
import {useDispatch} from "react-redux";
import {basketReducer, BasketReducerAT} from "./reducers/basketReducer";

const rootReducer = combineReducers({
    productData: productDataReducer,
    basketData: basketReducer
})

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// export type AppDispatch = typeof store.dispatch


type AppFullActionsType = ProductDataReducerAT | BasketReducerAT
//custom hook useDispatch
export const useAppDispatch: () => ThunkDispatch<AppRootStateType, any, AppFullActionsType> = useDispatch

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store