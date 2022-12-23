import {SortType} from "../../../bll/types";

export const getSortedAndSearchQueryString = ( sortData: string, sortType: SortType, searchTitle: string) => {
    const onSorted = (sortData !== '' && sortType !== '') ? `&sortBy=${sortData}&order=${sortType}` : ''
    const onSearch = (searchTitle !== '') ? `&search=${searchTitle}` : ''
    return onSorted+onSearch
}