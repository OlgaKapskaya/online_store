import {SortType} from "../bll/types";
import {getSortedAndSearchQueryString} from "../common/utils/helpers/getSortedAndSearchQueryString";
import {instance, limitDefault} from "../common/utils/constants/api/instance";


export const catalogAPI = {
    getCatalog(currentPage: number, sortData: string, sortType: SortType, searchTitle: string) {
        return instance.get(`catalog?page=${currentPage}&limit=${limitDefault}` + getSortedAndSearchQueryString(sortData,sortType,searchTitle))
            .then(response => response.data)
    },
    getProduct(productID: string | undefined){
            return instance.get(`catalog/${productID} `)
                .then(response => response.data)
    }
}