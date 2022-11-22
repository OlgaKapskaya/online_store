import {combineReducers, legacy_createStore} from 'redux'
import {productDataReducer} from "./reducers/productDataReducer";

const rootReducer = combineReducers({
    productData: productDataReducer
})
// непосредственно создаём store
export const store = legacy_createStore(rootReducer)
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент

// @ts-ignore
window.store = store