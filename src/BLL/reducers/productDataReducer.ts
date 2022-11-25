import {CategoriesType, ProductDataPageType} from "../types";

type ActionType = SortedDataAT | GetProductDataAT | SetFetchingAT

type SortedDataAT = ReturnType<typeof sortedDataAC>
type GetProductDataAT = ReturnType<typeof getDataAC>
type SetFetchingAT = ReturnType<typeof setFetchingAC>

const initState: ProductDataPageType = {
    data: [],
    isFetching: false
}


export const productDataReducer = (state = initState, action: ActionType): ProductDataPageType => {
    switch (action.type) {
        case 'GET_PRODUCT_DATA':
            return {...state, data: [...action.data]}
        case 'SET_PRODUCT_FETCHING':
            return {...state, isFetching: action.isFetching}
        default: return state
    }
}

export const sortedDataAC = (sortInfo: string) => ({type: 'GET_SORTED_DATA', sortInfo} as const)
export const getDataAC = (data: [{
    productID: string
    productName: string
    productPhoto: string
    productArticle: string
    productDescription: string
    productPrice: number
    productCount: number
    productCategories: CategoriesType
}]) => ({type: 'GET_PRODUCT_DATA', data} as const)
export const setFetchingAC = (isFetching: boolean) => ({type: 'SET_PRODUCT_FETCHING', isFetching} as const)