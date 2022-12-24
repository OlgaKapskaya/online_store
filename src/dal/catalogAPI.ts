import {CategoriesType, ProductDataType, SortType} from "../bll/types";
import {getSortedAndSearchQueryString} from "../common/utils/helpers/getSortedAndSearchQueryString";
import {instance, limitDefault} from "../common/utils/constants/api/instance";

type ResponseType<D = ProductDataType[]> = {
    items: D
    count: number
}
export const catalogAPI = {
    getCatalog(currentPage: number, sortData: string = "", sortType: SortType = "", searchTitle: string = "", filter: string = "") {
        return instance.get<ResponseType>(`catalog?page=${currentPage}&limit=${limitDefault}` + getSortedAndSearchQueryString(sortData,sortType,searchTitle, filter))
            .then(response => response.data)
    },
    getProduct(productID: string | undefined){
            return instance.get(`catalog/${productID} `)
                .then(response => response.data)
    },
    getAllCategories() {
        return instance.get<ResponseType<CategoriesType[]>>(`categories`)
            .then(response => response.data)
    }
}