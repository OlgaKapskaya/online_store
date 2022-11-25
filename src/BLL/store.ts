import {combineReducers, legacy_createStore, applyMiddleware} from 'redux'
import {productDataReducer} from "./reducers/productDataReducer"
import thunk from 'redux-thunk'
import {useDispatch} from "react-redux";

const rootReducer = combineReducers({
    productData: productDataReducer
})

// непосредственно создаём store
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch

//custom hook useDispatch
export const useAppDispatch: () => AppDispatch = useDispatch

// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store