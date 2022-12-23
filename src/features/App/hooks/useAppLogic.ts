import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../../bll/store";
import {selectBasketData} from "../../../bll/selectors/backetSelectors";
import {getCatalogTC} from "../../../bll/reducers/productDataReducer";
import {getBasketIntoLocalStorageTC} from "../../../bll/reducers/basketReducer";



export const useAppFetchLogic = () => {
    const basketData = useAppSelector(selectBasketData)
    // const productData = useAppSelector<ProductDataPageType>(state => state.productData)
    const {currentPage, sortData, sortType, searchTitle, isFetching} = useAppSelector(state => state.productData)

    const dispatch = useAppDispatch()
    // console.log(JSON.stringify(state.productData))

    // const {filter,setFilterProductData} = useFilterProductData()

    useEffect(() => {
        dispatch(getCatalogTC(currentPage, sortData, sortType, searchTitle))
    }, [currentPage, dispatch, sortType, sortData, searchTitle])

    //basket
    useEffect(() => {
        dispatch(getBasketIntoLocalStorageTC())
    }, [dispatch])

    useEffect(() => {
        localStorage.setItem('inBasket', JSON.stringify(basketData))
    }, [basketData])

    return {isFetching}
}