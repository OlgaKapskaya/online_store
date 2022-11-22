import {CategoriesType, ProductDataPageType} from "../types";

type ActionType = SortedDataAT | GetProductData

type SortedDataAT = ReturnType<typeof sortedDataAC>
type GetProductData = ReturnType<typeof getDataAC>

const initState: ProductDataPageType = {
    data: [],
    isFetching: false
}


export const productDataReducer = (state = initState, action: ActionType): ProductDataPageType => {
    switch (action.type) {
        case 'SORTED_DATA': {
            let newState = {...state}
            switch (action.sortInfo) {
                case '0':  return state
                case '1':
                    return {
                        ...newState,
                        data: newState.data.sort((a, b) =>
                            a.productName.localeCompare(b.productName))
                    }
                case '2':
                    return {
                        ...newState,
                        data: newState.data.sort((a,b) =>
                        b.productName.localeCompare(a.productName))}
                case '3':
                    return {
                        ...newState,
                        data: newState.data.sort((a, b) =>
                            a.productPrice - b.productPrice)
                    }
                case '4':
                    return {
                        ...newState,
                        data: newState.data.sort((a, b) =>
                            b.productPrice - a.productPrice)
                    }
            }
        }
       return state
        case 'GET_PRODUCT_DATA':
            return {...state, data: [...state.data, ...action.data]}
        default: return state
    }
}

export const sortedDataAC = (sortInfo: string) => ({type: "SORTED_DATA", sortInfo} as const)
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
