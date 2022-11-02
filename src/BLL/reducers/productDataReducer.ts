import {ProductDataType} from "../types";
const SORTED_DATA = 'SORTED_DATA'

type ActionType = SortedDataAT

type SortedDataAT = {
    type: 'SORTED_DATA'
    sortInfo: string
}



export const productDataReducer = (state: ProductDataType[], action: ActionType): ProductDataType[] => {
    switch (action.type) {
        case SORTED_DATA: {
            let newState = [...state]
            switch (action.sortInfo) {
                case '0':  return state
                case '1':
                    return newState.sort((a,b) =>
                        a.productName.localeCompare(b.productName))
                case '2':
                    return newState.sort((a,b) =>
                        b.productName.localeCompare(a.productName))
                case '3':
                    return newState.sort((a,b) =>
                        a.productPrice - b.productPrice)
                case '4':
                    return newState.sort((a,b) =>
                        b.productPrice - a.productPrice)
            }
        }
       return state
    }
}

export const SortedDataAC = (sortInfo: string):SortedDataAT => ({type: "SORTED_DATA", sortInfo})
