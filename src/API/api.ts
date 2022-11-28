import axios from 'axios'
import {SortType} from "../BLL/types";

const instance = axios.create({
    baseURL: 'https://637cb2e416c1b892ebbc5197.mockapi.io/api/',
})
export const catalogAPI = {
    getCatalog(currentPage: number, sortData: string, sortType: SortType, searchTitle: string) {
        const onSorted = (sortData !== '' && sortType !== '') ? `&sortBy=${sortData}&order=${sortType}` : ''
        const onSearch = (searchTitle !== '') ? `&search=${searchTitle}` : ''

        return instance.get(`catalog?page=${currentPage}&limit=9` + onSorted + onSearch)
            .then(response => response.data)
    }
}