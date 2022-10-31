export type StateType = {
    productData: ProductDataType[]
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
export type CategoriesType = 'Mac' | 'iPad' | 'iPhone' | 'Watch' | 'TV' | 'AirPods' | 'Аксессуары'