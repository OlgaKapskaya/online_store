import {CategoriesType, ProductDataPageType, ProductDataType, SortType} from "../types";
import {catalogAPI} from "../../dal/catalogAPI";
import {Dispatch} from "redux"

export type ProductDataReducerAT = GetProductDataAT
    | SetFetchingAT
    | ChangeCurrentPageAT
    | ChangeSortDataTypeAT
    | ChangeSearchTitleAT
    | ChangeFilterAT
    | GetCategoriesAT


type GetProductDataAT = ReturnType<typeof getDataAC>
type SetFetchingAT = ReturnType<typeof setFetchingAC>
type ChangeCurrentPageAT = ReturnType<typeof changeCurrentPageAC>
type ChangeSortDataTypeAT = ReturnType<typeof changeSortDataTypeAC>
type ChangeSearchTitleAT = ReturnType<typeof changeSearchTitleAC>
type ChangeFilterAT = ReturnType<typeof changeFilterAC>
type GetCategoriesAT = ReturnType<typeof getCategoriesAC>

const initState: ProductDataPageType = {
    data: [],
    categories: [],
    isFetching: false,
    currentPage: 1,
    pageSize: 9,
    totalCount: 0,
    sortData: "",
    sortType: "",
    searchTitle: "",
    filter: ""
}


export const productDataReducer = (state = initState, action: ProductDataReducerAT): ProductDataPageType => {
    switch (action.type) {
        case "GET_PRODUCT_DATA":
            return {
                ...state,
                data: [...action.data],
                totalCount: action.totalCount,
                filter: action.filter
            }
        case "GET_CATEGORIES":
            return {...state, categories: action.categories}
        case "SET_PRODUCT_FETCHING":
            return {...state, isFetching: action.isFetching}
        case "CHANGE_CURRENT_PAGE":
            return {...state, currentPage: action.currentPage}
        case "CHANGE_SORT_DATA_TYPE":
            return {...state, sortData: action.sortData, sortType: action.sortType}
        case "CHANGE_SEARCH_TITLE":
            return {...state, searchTitle: action.searchTitle}
        case "CHANGE_FILTER":
            return {...state, filter: action.filter}
        default:
            return state
    }
}


export const getDataAC = (data: ProductDataType[], totalCount: number, filter: string) => ({
    type: "GET_PRODUCT_DATA",
    data,
    totalCount,
    filter
} as const)
export const setFetchingAC = (isFetching: boolean) => ({type: "SET_PRODUCT_FETCHING", isFetching} as const)
export const changeCurrentPageAC = (currentPage: number) => ({type: "CHANGE_CURRENT_PAGE", currentPage} as const)
export const changeSortDataTypeAC = (sortData: string, sortType: SortType) =>
    ({type: "CHANGE_SORT_DATA_TYPE", sortData, sortType} as const)
export const changeSearchTitleAC = (searchTitle: string) => ({type: "CHANGE_SEARCH_TITLE", searchTitle} as const)
export const changeFilterAC = (filter: string) => ({type: "CHANGE_FILTER", filter} as const)
export const getCategoriesAC = (categories: CategoriesType[]) => ({type: "GET_CATEGORIES", categories} as const)



export const getCatalogTC = (currentPage: number, sortData: string, sortType: SortType, searchTitle: string, filter: string) => (dispatch: Dispatch<ProductDataReducerAT>) => {
    dispatch(setFetchingAC(true))
    catalogAPI.getCatalog(currentPage, sortData, sortType, searchTitle, filter)
        .then((res) => {
            dispatch(getDataAC(res.items, res.count, filter))
            dispatch(setFetchingAC(false))
        })
}
export const getCategoriesTC = () => (dispatch: Dispatch<ProductDataReducerAT>) => {
    dispatch(setFetchingAC(true))
    catalogAPI.getAllCategories()
        .then((res) => {
            dispatch(getCategoriesAC(res.items))
            dispatch(setFetchingAC(false))
        })
}


