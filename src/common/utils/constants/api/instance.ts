import axios from "axios";

export const instance = axios.create({
    baseURL: 'https://637cb2e416c1b892ebbc5197.mockapi.io/api/',
})

export const limitDefault = 9