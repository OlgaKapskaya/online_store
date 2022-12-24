import {useEffect} from "react";
import {selectBasketData} from "../../../bll/selectors/backetSelectors";
import {getCatalogTC, getCategoriesTC} from "../../../bll/reducers/productDataReducer";
import {getBasketIntoLocalStorageTC} from "../../../bll/reducers/basketReducer";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/react-redux-hooks";
import {state} from "../../../bll/state";



export const useAppFetchLogic = () => {
    const basketData = useAppSelector(selectBasketData)
    const {currentPage, sortData, sortType, searchTitle, isFetching} = useAppSelector(state => state.productData)

    const dispatch = useAppDispatch()
    // console.log(JSON.stringify(state.productData))
    const filter = useAppSelector(state => state.productData.filter)

    useEffect(() => {
        dispatch(getCatalogTC(currentPage, sortData, sortType, searchTitle, filter))
    }, [currentPage, dispatch, sortType, sortData, searchTitle, filter])

    //first render
    useEffect(() => {
        dispatch(getBasketIntoLocalStorageTC())
        dispatch(getCategoriesTC())
        dispatch(getCatalogTC(currentPage, sortData, sortType, searchTitle, "all"))
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem("inBasket", JSON.stringify(basketData))
    }, [basketData])

    return {isFetching, filter}
}