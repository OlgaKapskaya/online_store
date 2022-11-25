import {CategoriesType, ProductDataPageType} from "../types";
import {catalogAPI} from "../../API/api";
import {Dispatch} from "redux"
import {AppRootStateType} from "../store";
import {ThunkAction} from 'redux-thunk';

type ActionType = GetProductDataAT | SetFetchingAT | ChangeCurrentPageAT


type GetProductDataAT = ReturnType<typeof getDataAC>
type SetFetchingAT = ReturnType<typeof setFetchingAC>
type ChangeCurrentPageAT = ReturnType<typeof changeCurrentPageAC>

const initState: ProductDataPageType = {
    data: [],
    isFetching: false,
    currentPage: 1,
    pageSize: 9
}


export const productDataReducer = (state = initState, action: ActionType): ProductDataPageType => {
    switch (action.type) {
        case 'GET_PRODUCT_DATA':
            return {...state, data: [...action.data]}
        case 'SET_PRODUCT_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'CHANGE_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }
}


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
export const changeCurrentPageAC = (currentPage: number) => ({type: 'CHANGE_CURRENT_PAGE', currentPage} as const)


export const getCatalogTC = (): ThunkAction<Promise<void>, AppRootStateType, unknown, ActionType> => {
    return async (dispatch) => {
        dispatch(setFetchingAC(true))
        catalogAPI.getCatalog()
            .then(response => {
                dispatch(getDataAC(response))
                dispatch(setFetchingAC(false))
            })
    }
}

export const getSortedCatalogTC = (sortData: string, sortType: string) => (dispatch: Dispatch<ActionType>) => {
    dispatch(setFetchingAC(true))
    catalogAPI.getSortedCatalog(sortData, sortType)
        .then(response => {
            dispatch(getDataAC(response))
            dispatch(setFetchingAC(false))
        })
}