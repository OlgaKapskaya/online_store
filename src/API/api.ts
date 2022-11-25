import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://637cb2e416c1b892ebbc5197.mockapi.io/api/',
})
export const catalogAPI = {
    getCatalog() {
        return instance.get(`catalog`)
            .then(response => response.data)
    },
    getSortedCatalog(sortData: string, sortType: string) {
        return instance.get(`catalog?sortBy=${sortData}&order=${sortType}`)
            .then(response => response.data)
    },
    getSearchCatalog(searchTitle: string) {
        return instance.get(`catalog?search=${searchTitle}`)
            .then(response => response.data)
    },
}