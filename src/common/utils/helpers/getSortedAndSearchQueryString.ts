import {SortType} from "../../../bll/types";

export const getSortedAndSearchQueryString = ( sortData: string = "", sortType: SortType = "", searchTitle: string = "", filter: string = "") => {
    const onSorted = (sortData && sortType ) ? `&sortBy=${sortData}&order=${sortType}` : ""
    const onSearch = (searchTitle) ? `&search=${searchTitle}` : ""
    const onFiltered = (filter !== "all") ? `&filter=${filter}` : ""
    return onSorted+onSearch+onFiltered
}