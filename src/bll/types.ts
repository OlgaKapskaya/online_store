export type StateType = {
    productData: ProductDataType[]
    categoriesData: CategoriesType[]
}

export type ProductDataPageType = {
    data: ProductDataType[]
    categories: CategoriesType[]
    isFetching: boolean
    currentPage: number
    pageSize: number
    totalCount: number
    sortData: string,
    sortType: SortType
    searchTitle: string
    filter: string
}

export type ProductDataType = {
    productID: string
    productName: string
    productPhoto: string
    productArticle: string
    productDescription: string
    productPrice: number
    productCount: number
    productCategories: string
}

export type CategoriesType = {
    id: string
    category: string
}
export type BasketProductType = ProductDataType & {
    productCountToBuy: number
}
export type OptionsSelectType = {
    id: string
    value: string
}
export type SortType = "desc" | "asc" | ""

export type UserType = {
    id: string
    email: string
    password: string
    orders: OrderType[]
}
export type AuthType = UserType & {
    isAuth: boolean
    isLoading: boolean
}
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
export type OrderPayloadType = {
    userID: string
    order: BasketProductType[]
    totalPrice: number
}

export type OrderType = {
    createdAt: string
    id: string
    order: BasketProductType[]
    totalPrice: number
    userID: string
}