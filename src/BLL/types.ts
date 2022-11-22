export type StateType = {
    productData: ProductDataType[]
    categoriesData: CategoriesType[]
}

export type ProductDataPageType = {
    data: ProductDataType[]
    isFetching: boolean
}

export type ProductDataType = {
    productID: string
    productName: string
    productPhoto: string
    productArticle: string
    productDescription: string
    productPrice: number
    productCount: number
    productCategories: CategoriesType
}

export type CategoriesType = {
    type: string
    model?: {
        name: string
    }
}
export type BasketProductType = {
    productID: string
    productName: string
    productPhoto: string
    productArticle: string
    productPrice: number
    productCountToBuy: number
}
export type OptionsSelectType = {
    id: string
    value: string
}