import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://637cb2e416c1b892ebbc5197.mockapi.io/api/',
})
export const catalogAPI= {
    getCatalog() {
        return instance.get('catalog')
            .then(response => response.data)
    }
}