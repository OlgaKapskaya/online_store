import {useEffect} from "react";
import {selectBasketData} from "../../../bll/selectors/backetSelectors";
import {getCatalogTC, getCategoriesTC} from "../../../bll/reducers/productDataReducer";
import {getBasketIntoLocalStorageTC} from "../../../bll/reducers/basketReducer";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/react-redux-hooks";
import {state} from "../../../bll/state";
import {selectFilter} from "../../../bll/selectors/productDataSelectors";


export const useAppFetchLogic = () => {
    const basketData = useAppSelector(selectBasketData)
    const {currentPage, sortData, sortType, searchTitle, isFetching} = useAppSelector(state => state.productData)

    const dispatch = useAppDispatch()
    console.log(JSON.stringify(state.productData))
    const filter = useAppSelector(selectFilter)

    const user = useAppSelector(state => state.users)
    // console.log(user)
    useEffect(() => {
        dispatch(getCatalogTC(currentPage, sortData, sortType, searchTitle, filter))
    }, [currentPage, dispatch, sortType, sortData, searchTitle, filter])

    //first render
    useEffect(() => {
        dispatch(getBasketIntoLocalStorageTC())
        dispatch(getCategoriesTC())
        dispatch(getCatalogTC(currentPage, sortData, sortType, searchTitle, "all"))
    }, [])

    useEffect(() => {
        localStorage.setItem("inBasket", JSON.stringify(basketData))
    }, [basketData])

    return {isFetching, filter}
}