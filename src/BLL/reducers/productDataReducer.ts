import {CategoriesType, ProductDataPageType, SortType} from "../types";
import {catalogAPI} from "../../API/api";
import {Dispatch} from "redux"

export type ProductDataReducerAT = GetProductDataAT | SetFetchingAT
    | ChangeCurrentPageAT | ChangeSortDataTypeAT | ChangeSearchTitleAT


type GetProductDataAT = ReturnType<typeof getDataAC>
type SetFetchingAT = ReturnType<typeof setFetchingAC>
type ChangeCurrentPageAT = ReturnType<typeof changeCurrentPageAC>
type ChangeSortDataTypeAT = ReturnType<typeof changeSortDataTypeAC>
type ChangeSearchTitleAT = ReturnType<typeof changeSearchTitleAC>

const initState: ProductDataPageType = {
    data: [],
    isFetching: false,
    currentPage: 1,
    pageSize: 9,
    sortData: '',
    sortType: '',
    searchTitle: ''
}


export const productDataReducer = (state = initState, action: ProductDataReducerAT): ProductDataPageType => {
    switch (action.type) {
        case 'GET_PRODUCT_DATA':
            return {...state, data: [...action.data]}
        case 'SET_PRODUCT_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'CHANGE_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'CHANGE_SORT_DATA_TYPE':
            return {...state, sortData: action.sortData, sortType: action.sortType}
        case 'CHANGE_SEARCH_TITLE':
            return {...state, searchTitle: action.searchTitle}
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
export const changeSortDataTypeAC = (sortData: string, sortType: SortType) =>
    ({type: 'CHANGE_SORT_DATA_TYPE', sortData, sortType} as const)
export const changeSearchTitleAC = (searchTitle: string) => ({type: 'CHANGE_SEARCH_TITLE', searchTitle} as const)


export const getCatalogTC = (currentPage: number, sortData: string, sortType: SortType, searchTitle: string) => (dispatch: Dispatch<ProductDataReducerAT>) => {
    dispatch(setFetchingAC(true))
    catalogAPI.getCatalog(currentPage, sortData, sortType, searchTitle)
        .then(response => {
            dispatch(getDataAC(response))
            dispatch(setFetchingAC(false))
        })
}
