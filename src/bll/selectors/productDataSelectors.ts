import {AppRootStateType} from "../store";

export const selectProductData = (state:AppRootStateType) => state.productData
export const selectFilter = (state:AppRootStateType) => state.productData.filter